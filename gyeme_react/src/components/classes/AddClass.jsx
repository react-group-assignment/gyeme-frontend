import React from 'react';
import Class from './images/class.jpg';
import brock from './images/brock.jpg'
import eddie from './images/eddie.jpg'
import flex01 from './images/flexible_1.jpg'
import flex02 from './images/flexible_2.jpg'
import ejf from './images/ejf2.jpg'
import ohp from './images/ohp_1.jpg'
import './add-class.css'
import useWindowDimensions from '../../hooks/useWindowDimensions';

export default function AddClass() {
  const { height, width } = useWindowDimensions();

  if (width <= 1000){
    return (
      <div className='container'>
        <form>
            <img src={Class} alt="image of a gym class" height="240px" />
            <input type="button" value="upload an image" />
        </form>
        <form className='form-items' action="submit">
          <div>
            <label htmlFor="">Class name</label>
            <input type="text" />
          </div>
          <div >
            <label htmlFor="">Class description</label>
            <textarea></textarea>
          </div>   
            <input className='submit' type="button" value="Create This Class!"/>
        </form>
        <a href="/">back to classes</a>
      </div>
    )
} else {
    return (
      <div className='container'>
        <div className='images left'>
          <img src={ohp} alt="image of a gym class" height="240px"  width='240px'/>
          <img src={flex01} alt="image of a gym class" height="240px" width='240px' />
          <img src={eddie} alt="image of a gym class" height="240px" width='240px' />
        </div>
        {/* <h1>{height} {width}</h1> */}
        <form>
            <img src={Class} alt="image of a gym class" height="240px" />
            <input type="button" value="upload an image" />
            <div>
            <label htmlFor="">Class name</label>
            <input type="text" />
          </div>
          <div >
            <label htmlFor="">Class description</label>
            <textarea></textarea>
          </div>   
            <input className='submit' type="button" value="Create This Class!"/>
            <a href="/">back to classes</a>
        </form>
        
        <div className='images right'>
          <img src={flex02} alt="image of a gym class" height="240px" width='240px' />
          <img src={brock} alt="image of a gym class" height="240px" width='240px' />
          <img src={ejf} alt="image of a gym class" height="240px" width='240px' />
        </div>
      </div>
    )
  }
  
}
