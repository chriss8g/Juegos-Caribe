'use client'
import useAuthentication from "../../hooks/useAuthentication";
import Layout from "../../Components/Layout/Layout";
import { LogInCredentials, userCredentials } from "@/types/user"
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LogIn()
{
    const[LogIn, setLogIn] = useState(true)
    const router = useRouter()
    const { createUser, LogInUser, loggedInUser, isLoggedIn } = useAuthentication()


    function handleOnSubmit(e: React.MouseEvent) {
        e.preventDefault()
        var response = ""
        if(LogIn)
        {
            const logInCreds : LogInCredentials = {
                email: (document.getElementById('email') as HTMLInputElement)?.value,
                password: (document.getElementById('password') as HTMLInputElement)?.value,
            }
            response = LogInUser(logInCreds)
            if(response !== "") alert(response)
            else
            {
                // router.push("/")
            }
            console.log(isLoggedIn)
        }
        else
        {
            const userCredentials: userCredentials = {
                email: (document.getElementById('email') as HTMLInputElement)?.value,
                name: (document.getElementById('name') as HTMLInputElement)?.value,
                lastname: (document.getElementById('lastname') as HTMLInputElement)?.value,
                password: (document.getElementById('password') as HTMLInputElement)?.value,
                faculty: (document.getElementById('faculty') as HTMLInputElement)?.value,
            }
            response = createUser(userCredentials)
        }
        
        
    }

    return(
        <div className="LogIn">
            <Layout>
                <form
                className="p-5 gap-4 flex flex-col w-4/5 m-auto"
                >
                    <input className="p-3 rounded-md bg-gray-200 my-1" type="email" placeholder="correo" id="email" required/>
                    {!LogIn && 
                        <>
                            <input className="p-3 rounded-md bg-gray-200 my-1" type="text" placeholder="nombre" id="name" required/>
                            <input className="p-3 rounded-md bg-gray-200 my-1" type="text" placeholder="apellidos" id="lastname"/>
                            <input className="p-3 rounded-md bg-gray-200 my-1" type="text" placeholder="facultad" id="faculty" required/>
                        </>
                    }
                    <input className="p-3 rounded-md bg-gray-200 my-1" type="password" placeholder="contraseña" id="password" required/>
                    <button 
                        onClick={(e)=>handleOnSubmit(e)}
                        className="bg-[#5a1024] text-white w-4/5 m-auto py-1 rounded-md"
                        >
                            {LogIn ? `Entrar` : `Crear`}
                    </button>
                </form>
                <p className="w-2/5 m-auto text-center"> {LogIn ? `No tienes una cuenta?` : `Ya tienes una cuenta?`}</p>
                <h4 
                    onClick={()=>setLogIn(!LogIn)}
                    className="underline text-blue-600 cursor-pointer w-2/5 m-auto text-center"
                    >
                        {LogIn ? `Crear Cuenta` : `Entrar a mi cuenta`}
                </h4>
            </Layout>
        </div>
    )
}