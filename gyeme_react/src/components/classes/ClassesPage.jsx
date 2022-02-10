import React from 'react';
import { useEffect, useState } from 'react';
import yoga from './images/yoga.jpg'
import functional from './images/functional.jpg'
import flexing from './images/flexing.jpg'
import trash from './images/trash.png'
import "./classes_page.css"


export default function ClassesPage() {
    // const classes = [
    //     {
    //         name: "Yoga and meditation",
    //         trainer: "Star Flower",
    //         membersOnly: true,
    //         description: "Join us for this amazing class at 8pm on saturday the 3rd of october",
    //         image: yoga
    //     },
    //     {
    //         name: "Functional Strength Training",
    //         trainer: "Jacked Johnson",
    //         membersOnly: true,
    //         description: "Join us for this amazing class at 9pm on saturday the 3rd of october",
    //         image: functional
    //     },
    //     {
    //         name: "Professional Flexing",
    //         trainer: "the Hammer",
    //         membersOnly: false,
    //         description: "Join us for this amazing class at 1am on saturday the 3rd of october",
    //         image: flexing
    //     },
    // ]
    
    const [classes, setClasses] = useState("")

    const getClasses = async() => {
        try {           
            const response = await fetch("http://localhost:5000/classes")
            const jsonData = await response.json()
            setClasses(jsonData)
            console.log(classes)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getClasses()
    }, [])


    const userType = "trainer"

    return (
        <>
            <div className='heading'>
                
                <h1>Classes</h1>
                <h4>View All available Gyeme classes!</h4>
                {userType == "trainer" && <button className='add-class'>Add a class!</button>}
            </div>
            <section>
                {classes.map((element) => (
                    <div className='class'> 
                    
                        <figure>
                            <figcaption><strong>{element.name}</strong></figcaption>    
                            <img className='display-picture' src={element.image} width={300} height={320} alt="Picture of class" />
                            <figcaption><a href="/">Sign up for this class!</a></figcaption>
                        </figure>
                        <p>{element.description} hosted by <strong>{element.trainer}</strong></p>
                        <div className='buttons'>
                            {userType == "trainer" &&<img src={trash} width={40} height={40} className='icon' />}
                            <button className='book-class'>book this class!</button>
                            {element.membersOnly == true ? <p className='members-only'>members only</p> : <p className='members-only'>free to public!</p>}
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}