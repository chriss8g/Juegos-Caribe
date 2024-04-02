import { LoginInfo, RegisterUserInfo } from "../types/User";
import { useState } from "react"
import { toast } from 'react-toastify';
import {setCookie, getCookie} from "cookies-next"


export default function useAuthentication()
{
    const [userKey, setUserKey] = useState("")
    const [loggedIn, setLoggedIn] = useState(getCookie("loggedInUser")!==undefined) 

    // POST NEW USER
    function RegisterUser (newUser: RegisterUserInfo): string {
        try
        {
            const formData = new FormData();
            
            Object.keys(newUser).forEach(key => {
                formData.append(key, newUser[key]);
            });
            const response = fetch(`${process.env.API_URL}/v1/rest-auth/registration/`,{
                method: "POST",
                body: formData
            }).then(
                (response)=>
                {
                    if(!response.ok) toast.error("Ha ocurrido un error")
                    else toast.success("Usuario registrado")
                }
            )
        }
        catch(e)
        {
           console.log(e)
        }
        

        return ""
    }

    // LOGIN USER
    function LogUser (userinfo: LoginInfo): string {
        try
        {
            const formData = new FormData();
            
            Object.keys(userinfo).forEach(key => {
                formData.append(key, userinfo[key]);
            });
            fetch(`${process.env.API_URL}/v1/rest-auth/login/`,{
                method: "POST",
                body: formData
            })
            .then(
                async (response)=>
                {
                    if(!response.ok) toast.error("Ha ocurrido un error")
                    else{
                        toast.success("Sesión iniciada")
                        setLoggedIn(true)
                        setCookie("loggedInUser", userinfo["username"])
                    }
                }
            )
        }
        catch(e)
        {
           console.log(e)
        }

        return ""
    }

    function LogOut()
    {
        fetch(`${process.env.API_URL}/v1/rest-auth/logout/`,{
            method: "POST",
        })
        .then(
            async (response)=>
            {
                if(!response.ok) toast.error("Ha ocurrido un error")
                else{
                    setCookie("loggedInUser", undefined)
                    setLoggedIn(false)
                    toast.success("Sesión cerrada correctamente")
                }
            }
        )
    }
    

    return { RegisterUser, userKey, LogUser, loggedIn, LogOut }
}