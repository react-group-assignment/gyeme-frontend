import React from 'react';
import yoga from './images/yoga.jpg'


export default function ClassesPage() {
    const classes = [
        {
            name: "Yoga and meditation",
            trainer: "Star Flower",
            membersOnly: true,
            description: "Join us for this amazing class at 8pm on saturday the 3rd of october",
            image: yoga
        },
        {
            name: "Functional Strength Training",
            trainer: "the Hammer",
            membersOnly: true,
            description: "Join us for this amazing class at 9pm on saturday the 3rd of october",
            image: yoga
        },
        {
            name: "Professional Flexing",
            trainer: "the Hammer",
            membersOnly: true,
            description: "Join us for this amazing class at 1am on saturday the 3rd of october",
            image: yoga
        },
    ]

    return (
        <>
            <div className='heading'>
                <h1>Classes</h1>
                <h4>View All available Gyeme classes!</h4>
            </div>
            <section>
                {classes.map((element) => (
                    <div className='trainer'>
                        <figure>
                            <figcaption><strong>{element.name}</strong></figcaption>
                            <img className='display-picture' src={element.image} width={176} height={137} alt="Picture of class" />
                            <a href="/">Signup for this class!</a>
                        </figure>
                    </div>
                ))}
            </section>
        </>
    )
}