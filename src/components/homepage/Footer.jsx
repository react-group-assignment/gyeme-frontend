import React from 'react';
import './Footer.css'
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
            <div className='footer-contact'>
                <h4 className='footer-heading'>Contact</h4>
                <div><img className='footer-icon' src={phone} alt="phone icon" /><p>044 444 555</p></div>
                <div><img className='footer-icon' src={email} alt="email icon" /><p>Gyeme_fitness@gmail.com</p></div>
                <div><img className='footer-icon' src={location} alt="location icon" /><p>1234 water street, QLD</p></div>
            </div>
            <div className='footer-reception'>
                <h4 className='footer-heading'>Reception Hours</h4>
                <div className='reception-list'>
                    <p>Monday: 9 - 5</p>
                    <p>Tuesday: 9 - 5</p>
                    <p>Wednesday: 9 - 5</p>
                    <p>Thursday: 9 - 5</p>
                    <p>Friday: 9 - 5</p>
                    <p>Saturday: 10 - 3</p>
                    <p>Sunday: Closed</p>
                </div>
            </div>
            <div className='footer-social'>
                <h4 className='footer-heading'>Social Media</h4>
                <div className='socials'>
                    <img className='footer-icon-big' src={facebook} alt="social media icon" />
                    <img className='footer-icon-big' src={instagram} alt="social media icon" />
                    <img className='footer-icon-big' src={twitter} alt="social media icon" />
                    <img className='footer-icon-big' src={youtube} alt="social media icon" />
                </div>
            </div>
        </>
    )
}
