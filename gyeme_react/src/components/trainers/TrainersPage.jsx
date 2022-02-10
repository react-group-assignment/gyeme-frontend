import React, { useContext, useState, useEffect } from 'react';
import ronny from './trainer_images/ronny_cop.jpg'
import jacked_johnson from './trainer_images/jacked_johnson.jpg'
import donald_pump from './trainer_images/donald_pump.jpg'
import './trainers_page.css'
import Classes from '../homepage/Classes';
import { useAuth0 } from '@auth0/auth0-react';


export default function TrainersPage() {
    // Auth state
    const { user, isAuthenticated, isLoading } = useAuth0()
    const [role_id, setRole_id] = useState("")

    //Trainers state
    const [trainers, setTrainers] = useState("")

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

        const getTrainers = async () => {
            try {
                const response = await fetch("http://localhost:5000/trainers")
                const jsonData = await response.json()
                setTrainers(jsonData)
            } catch (error) {
                console.error(error.message)
            }
        }

    useEffect(() => {
      getTrainers()
    }, [])
    


    if (isLoading) {
        return <div>Loading ...</div>;
    }

    console.log(trainers)

    return (
        <>
             <h1>{role_id}</h1>
            <div className='heading'>
                <h1>Trainers</h1>
                <h4>View All available Gyeme trainers!</h4>
            </div>
            <section>
                {trainers.map((trainer) => (
                    <div className='trainer'>
                        <figure>
                            <figcaption><strong>{trainer.trainerName}</strong></figcaption>
                            <img className='display-picture' src={trainer.image || ronny} width={176} height={137} alt="trainer's display picture" />
                            <a href="/">Contact this trainer!</a>
                        </figure>
                        <div className='class-list'>
                            <p>{trainer.trainerDescription}</p>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}
