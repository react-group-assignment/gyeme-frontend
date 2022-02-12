import React from 'react';
import { useState, useEffect } from 'react';
import Class from './images/class.jpg';
import brock from './images/brock.jpg'
import eddie from './images/eddie.jpg'
import flex01 from './images/flexible_1.jpg'
import flex02 from './images/flexible_2.jpg'
import ejf from './images/ejf2.jpg'
import ohp from './images/ohp_1.jpg'
import './add-class.css'
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { useAuth0 } from '@auth0/auth0-react';
import api from '../../api';

export default function AddClass() {
  // Image 
  const [fileInputState, setFileInputState] = useState("")
  const [previewSource, setPreviewSource] = useState()
  // Auth state
  const { user, isAuthenticated, isLoading } = useAuth0()
  const [role_id, setRole_id] = useState("")

  // Viewport sizes
  const { height, width } = useWindowDimensions();
  
  // Class text fields
  const [className, setClassName] = useState("")
  const [classDescription, setClassDescription] = useState("")
  const [membersOnly, setMembersOnly] = useState(true)

  //Handle submit sets up the class object and calls create class
  function handleSubmit(e) {
    e.preventDefault()

    // can not submit without an image - this validation needs to be better
    if (!previewSource) {
      return
    }

    const image = previewSource
    const newClass = {
      name: className,
      description: classDescription,
      members_only: membersOnly,
      image: image 
    }
    createClass(newClass)
  }
  
  //Posts the class to the database
  const createClass = async (newClass) => {
    try {
      await api.post('classes', {
        method: 'POST',
        body: JSON.stringify(newClass),
        headers: { 'Content-Type': 'application/json' }
      })
      // Below will reset the image after uploading
      // setFileInputState('') 
      // setPreviewSource('')
    } catch (error) {
      console.log(error.message)
    }
  }

  // handleFileInputChange updates the selected previewImage
  const handleFileInputChange = (e) => {
    const file = e.target.files[0]
    previewFile(file)
  }

  // previewFile is to view the selected image on the screen
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }

  // Checking the role_id in the db in order to give permissions
    useEffect(() => {
        async function CheckRoleId(currentUserEmail) {
            try {
                const res = await api.get('users')
                const users = await res.json()
                users.forEach(element => {
                    if (element.email == currentUserEmail) {
                        console.log(element.role_id)
                        setRole_id(element.role_id)
                        return element.role_id
                    }
                });
            } catch (error) {
                console.log(error.message)
            }
        console.log(role_id)
        }

        if (user) CheckRoleId(user.email)
        }, [])

    return (
      <div className='container'>
        <form  >
          <img src={Class} alt="image of a gym class" height="240px" />
          <input type="file" name="image" value={fileInputState} onChange={handleFileInputChange} />
        </form>

        {previewSource && (<img src={previewSource} alt='your image' height="240px" width='240px' />)}

        <form onSubmit={handleSubmit} className='form-items' action="submit">
          <div>
            <label>Class name</label>
            <input type="text" required value={className} onChange={(e) => setClassName(e.target.value)} />
          </div>
          <div >
            <label >Class description</label>
            <textarea required value={classDescription} onChange={(e) => setClassDescription(e.target.value)} ></textarea>
          </div>
          <select value={membersOnly} onChange={(e) => setMembersOnly(e.target.value)}>
            <option value={true} >members only</option>
            <option value={false} >open to public</option>
          </select>
          {(role_id == 1 || role_id == 3) && <input className='submit' type="submit" value="Create This Class!" />}
        </form>
        <a href="/classes">back to classes</a>
      </div>
    )
  }
