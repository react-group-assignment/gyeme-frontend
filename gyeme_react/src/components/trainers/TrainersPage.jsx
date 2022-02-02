import React from 'react';
import ronny from './trainer_images/ronny_cop.jpg'
import './trainers_page.css'


//for each trainer: render the trainer div
export default function TrainersPage() {
  return (
      <section>
          <div className='heading'>
            <h1>Trainers</h1>
            <h4>View All available Gyeme trainers!</h4>
          </div>
          <div className='trainer'>
            <figure>
                    <figcaption><strong>Big Ronny</strong></figcaption>
                <img src={ronny} width={176} height={137} alt="" />
                    <a href="/">Contact this trainer!</a>
            </figure>
            <div className='class-list'>
            <p>This trainer is the reigning WWE champion and has a lat-span of 1.5m</p>
                <h3>Classes</h3>
                <ul>
                    <li>Bodybuilding</li>
                    <li>Powerlifting</li>
                    <li>Jujitsu</li>
                </ul>
            </div>
          </div>
      </section>
  )
}
