import React from 'react'

export default async function CheckRoleId(currentUserEmail) {

    try {
        const res = await fetch('https://cryptic-waters-23853.herokuapp.com/users')
        const users = await res.json()
        // console.log(users)
        users.forEach(element => {
            if (element.email == currentUserEmail) {
                // console.log(element.role_id)
                console.log(element.role_id)
                return element.role_id
            }  
        });
      } catch (error) {
        console.log(error.message)
      }
    
}
