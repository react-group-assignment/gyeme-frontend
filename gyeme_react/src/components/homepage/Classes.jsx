import React from 'react';
import './Classes.css'
import dumbell from './images/dumbell_icon.png'

export default function Classes() {
    return (
        <>
            <div className='classes1'>
                <div className='class-list'><p>Yoga</p><img className='dumbell' src={dumbell} alt="dumbell"></img></div>
                <div className='class-list'><p>HIIT</p><img className='dumbell' src={dumbell} alt="dumbell"></img></div>
                <div className='class-list'><p>Boxing</p><img className='dumbell' src={dumbell} alt="dumbell"></img></div>
                <div className='class-list'><p>Pilates</p><img className='dumbell' src={dumbell} alt="dumbell"></img></div>
                <div className='class-list'><p>Aerobics</p><img className='dumbell' src={dumbell} alt="dumbell"></img></div>
            </div>
            <div className='classes2'>
                <div className='class-list'><p>Yoga</p><img className='dumbell' src={dumbell} alt="dumbell"></img></div>
                <div className='class-list'><p>HIIT</p><img className='dumbell' src={dumbell} alt="dumbell"></img></div>
                <div className='class-list'><p>Boxing</p><img className='dumbell' src={dumbell} alt="dumbell"></img></div>
                <div className='class-list'><p>Pilates</p><img className='dumbell' src={dumbell} alt="dumbell"></img></div>
                <div className='class-list'><p>Aerobics</p><img className='dumbell' src={dumbell} alt="dumbell"></img></div>
            </div>
            <div className='classes3'>
                <div className='class-list'><p>Yoga</p><img className='dumbell' src={dumbell} alt="dumbell"></img></div>
                <div className='class-list'><p>HIIT</p><img className='dumbell' src={dumbell} alt="dumbell"></img></div>
                <div className='class-list'><p>Boxing</p><img className='dumbell' src={dumbell} alt="dumbell"></img></div>
                <div className='class-list'><p>Pilates</p><img className='dumbell' src={dumbell} alt="dumbell"></img></div>
                <div className='class-list'><p>Aerobics</p><img className='dumbell' src={dumbell} alt="dumbell"></img></div>
            </div>
        </>
    )
}
