import { LogInCredentials, User } from "@/types/user"
import data from "../../users.json"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

var users: User[] = data as User[]

export default function useAuthentication()
{
    const router = useRouter()
    const [currentUser, setCurrentUser] = useState(
        {
            email: "",
            name: "",
            lastname: "",
            faculty: "",
        }
    ) 
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loggedInUser, setLoggedInUser] = useState(
        {
            email: "",
            name: "",
            lastname: "",
            faculty: ""
        }
    )

    useEffect(()=>{
        if(isLoggedIn)
        {
            setLoggedInUser(currentUser)
            // router.push("/")
        }
    },[isLoggedIn])

    function createUser(newUser: User): string {
        for (const user of users)
        {
            if(user.email === newUser.email) return "Hay una cuenta vinculada al correo introducido"
        }
        setCurrentUser(newUser)
        setIsLoggedIn(true)

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
                setCurrentUser(user)
                if(user.password === User.password)
                {
                    setIsLoggedIn(true)
                    return ""
                }
                else return "Contraseña incorrecta"
            }
            else return "No existe una cuenta con el correo introducido"
        }
        return ""
    }

    function LogOut()
    {
        setCurrentUser({
            email: "",
            name: "",
            lastname: "",
            faculty: ""
        })
        setLoggedInUser(
            {
                email: "",
                name: "",
                lastname: "",
                faculty: ""
            }
        )
        setIsLoggedIn(false)
        router.push("/")
    }


    return { createUser , loggedInUser, LogInUser, isLoggedIn, LogOut }
}