import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import yoga from './images/yoga.jpg'
import functional from './images/functional.jpg'
import flexing from './images/flexing.jpg'
import trash from './images/trash.png'
import "./classes_page.css"


export default function ClassesPage() {
    const [classes, setClasses] = useState("")

    // Auth state
    const { user, isAuthenticated, isLoading } = useAuth0()
    const [role_id, setRole_id] = useState("")

    const getClasses = async () => {
        try {
            const response = await fetch("http://localhost:5000/classes")
            const jsonData = await response.json()
            setClasses(jsonData)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getClasses()
    }, [])

    // Checking the role_id in the db in order to give permissions
    useEffect(() => {
        async function CheckRoleId(currentUserEmail) {
            try {
                const res = await fetch('http://localhost:5000/users')
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

    const userType = "trainer"

    return (
        <>
            <div className='heading'>
                <h1>Classes</h1>
                <h4>View All available Gyeme classes!</h4>
                {(role_id == 1 || role_id == 3) && <Link to="/classes/new" className='add-class'> <button>Add a class!</button> </Link>}
            </div>

            {classes == "" ? <h1>loading</h1> : <section>
                {classes.map((element) => (
                    <div className='class'>
                        <figure>
                            <figcaption><strong>{element.name}</strong></figcaption>
                            <img className='display-picture' src={element.image} width={300} height={320} alt="Picture of class" />
                            <figcaption><a href="/">Sign up for this class!</a></figcaption>
                        </figure>
                        {element.trainer && <p>{element.description} hosted by <strong>{element.trainer}</strong></p>}
                        <div className='buttons'>
                            {userType == "trainer" && <img src={trash} width={40} height={40} className='icon' />}
                            <button className='book-class'>book this class!</button>
                            {element.membersOnly == true ? <p className='members-only'>members only</p> : <p className='members-only'>free to public!</p>}
                        </div>
                    </div>
                ))}
            </section>}
        </>
    )
}