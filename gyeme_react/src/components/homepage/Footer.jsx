import React from 'react';
import './HomepageFooter.css'
import phone from './images/telephone.png'
import email from './images/mail-inbox-app.png'
import location from './images/location.png'
import youtube from './images/youtube.png'
import facebook from './images/facebook.png'
import twitter from './images/twitter.png'
import instagram from './images/instagram.png'

export default function Footer() {
    return (
        <>
            <div className='container'>
                <div className='footer-contact'>
                    <h2>Contact</h2>
                    <span><img className='icon' src={phone} alt="phone icon" />044 444 555</span>
                    <span><img className='icon' src={email} alt="email icon" />Gyeme_fitness@gmail.com</span>
                    <span><img className='icon' src={location} alt="location icon" />1234 water street, QLD</span>
                </div>
                <div className='footer-reception'>
                    <h2>Reception Hours</h2>
                    <div className='reception-list'>
                        <span className='time'>Monday: 9 - 5</span>
                        <span className='time'>Tuesday: 9 - 5</span>
                        <span className='time'>Wednesday: 9 - 5</span>
                        <span className='time'>Thursday: 9 - 5</span>
                        <span className='time'>Friday: 9 - 5</span>
                        <span className='time'>Saturday: 10 - 3</span>
                        <span className='time'>Sunday: Closed</span>
                    </div>
                </div>
                <div className='footer-social'>
                    <h2>Social Media</h2>
                    <div className='socials'>
                        <span><img className='icon-big' src={facebook} alt="social media icon"/> Facebook</span>
                        <span><img className='icon-big' src={instagram} alt="social media icon" />Instagram</span>
                        <span><img className='icon-big' src={twitter} alt="social media icon" />Twitter</span>
                        <span><img className='icon-big' src={youtube} alt="social media icon" />Youtube</span>
                    </div>

                </div>
            </div>
        </>
    )
}
