import React from 'react';
import './Homepage.css'
import dumbell from './images/dumbell_icon.png'

export default function Classes() {
  return (
    <>
      <h1 className='classes-heading'>Classes</h1>
      <div className='classes-home' >
          
          <div className='class-li'>Yoga</div><img className='dumbell-icon any-hover' src={dumbell} alt="dumbell"></img>
          <div className='class-li'>HIIT</div><img className='dumbell-icon any-hover' src={dumbell} alt="dumbell"></img>
          <div className='class-li'>Boxing</div><img className='dumbell-icon any-hover' src={dumbell} alt="dumbell"></img>
          <div className='class-li'>Pilates</div><img className='dumbell-icon any-hover' src={dumbell} alt="dumbell"></img>
          <div className='class-li'>Aerobics</div><img className='dumbell-icon any-hover' src={dumbell} alt="dumbell"></img>
        
      </div>
    </>
  )
}
