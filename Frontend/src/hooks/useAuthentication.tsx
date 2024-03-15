import { LogInCredentials, User } from "../types/user"
import data from "../../users.json"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { stringify } from "querystring"

var users: User[] = data as User[]

export default function useAuthentication()
{
    // const router = useRouter()
    const [loggedInUser, setLoggedInUser] = useState<User>(
        {
            email: "",
            name: "",
            lastname: "",
            faculty: "",
            password: "",
            isLoggedIn: false
        }
    )

    function createUser(newUser: User): string {
        for (const user of users)
        {
            if(user.email === newUser.email) return "Hay una cuenta vinculada al correo introducido"
        }
        newUser.isLoggedIn = true
        setLoggedInUser(newUser)

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
                    setLoggedInUser(
                        {
                            email: user.email,
                            name: user.name,
                            lastname: user.lastname,
                            faculty: user.faculty,
                            password: user.password,
                            isLoggedIn: true
                        }
                    )
                    updateUser({
                        email: user.email,
                        name: user.name,
                        lastname: user.lastname,
                        faculty: user.faculty,
                        password: user.password,
                        isLoggedIn: true
                    })
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
        setLoggedInUser(
            {
                email: loggedInUser.email,
                name: loggedInUser.name,
                lastname: loggedInUser.lastname,
                faculty: loggedInUser.faculty,
                password: loggedInUser.password,
                isLoggedIn: false
            }
        )
        updateUser({
            email: loggedInUser.email,
            name: loggedInUser.name,
            lastname: loggedInUser.lastname,
            faculty: loggedInUser.faculty,
            password: loggedInUser.password,
            isLoggedIn: false
        })
        // router.push("/")
    }

    function updateUser(newUser: User)
    {
        //PUT here
    }
    

    return { createUser , loggedInUser, LogInUser, LogOut }
}