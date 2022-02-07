import React from 'react';
import ronny from './trainer_images/ronny_cop.jpg'
import jacked_johnson from './trainer_images/jacked_johnson.jpg'
import donald_pump from './trainer_images/donald_pump.jpg'
import './trainers_page.css'
import Classes from '../homepage/Classes';


//for each trainer: render the trainer div
export default function TrainersPage() {
    const trainers = [
        {
            trainerName: "Ronny",
            trainerDescription: "This trainer is the reigning WWE champion and has a lat-span of 1.5m",
            image: ronny,
            trainerClasses: [
                {
                    ClassName: "Bodybuilding",
                    ClassDescription: "Hypertrophy training"
                },
                {
                    ClassName: "Jiu-jitsu",
                    ClassDescription: "Fight Ronny"
                }
            ],
        },
        {
            trainerName: "Donald Pump",
            trainerDescription: "This trainer has an instagram page with 800 billion followers",
            image: donald_pump,
            trainerClasses: [
                {
                    ClassName: "Strength training",
                    ClassDescription: "Powerlifting and general strength training"
                }
            ],
        },
        {
            trainerName: "Jacked Johnson",
            trainerDescription: "This trainer has developed an immunity to anabolics by being so jacked",
            image: jacked_johnson,
            trainerClasses: [
                {
                    ClassName: "Swimming",
                    ClassDescription: " Swimming lessons suitable for all ages and experience levels"
                }
            ],
        }
    ]

    return (
        <>
            <div className='heading'>
                <h1>Trainers</h1>
                <h4>View All available Gyeme trainers!</h4>
            </div>
            <section>
                {trainers.map((trainer) => (
                    <div className='trainer'>
                        <figure>
                            <figcaption><strong>{trainer.trainerName}</strong></figcaption>
                            <img className='display-picture' src={trainer.image} width={176} height={137} alt="trainer's display picture" />
                            <a href="/">Contact this trainer!</a>
                        </figure>
                        <div className='class-list'>
                            <p>{trainer.trainerDescription}</p>
                            <h3 className='classlist'>Classes</h3>
                            <ul>
                                {
                                    trainer.trainerClasses.map((element) => (
                                        <li>{element.ClassName}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}
