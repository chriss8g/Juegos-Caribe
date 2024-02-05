import { LogInCredentials, userCredentials } from "@/types/user"
import data from "../../users.json"
import { useState } from "react"

var users: userCredentials[] = data as userCredentials[]

export default function useAuthentication()
{
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loggedInUser, setLoggedInUser] = useState(
        {
            email: "",
            name: "",
            lastname: "",
            faculty: ""
        }
    )

    function createUser(newUser:userCredentials): string {
        for (const user of users)
        {
            if(user.email === newUser.email) return "Hay una cuenta vinculada al correo introducido"
        }
            setIsLoggedIn(true)
            setLoggedInUser(
                {
                    email: newUser.email,
                    name: newUser.name,
                    lastname: newUser.lastname,
                    faculty: newUser.faculty
                }
            )

        // POST NEW USER

        return ""
    }

    function LogInUser(User:LogInCredentials): string
    {
        for(const user of users)
        {
            if(user.email === User.email)
            {
                // HASH User PASSWORD
                if(user.password === User.password)
                {
                    setIsLoggedIn(true)
                    setLoggedInUser(
                        {
                            email: user.email,
                            name: user.name,
                            lastname: user.lastname,
                            faculty: user.faculty
                        }
                    )
                    return ""
                }
                else return "Contraseña incorrecta"
            }
            else return "No existe una cuenta con el correo introducido"
        }
        return ""
    }


    return { createUser , loggedInUser, LogInUser, isLoggedIn }
}