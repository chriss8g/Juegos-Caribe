'use client'
import useAuthentication from "../../hooks/useAuthentication";
import Layout from "../../Components/Layout/Layout";
import { LogInCredentials, User } from "../../types/user"
import React, { useState } from "react";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";

export default function LogIn()
{
    const[LogIn, setLogIn] = useState(true)
    const { createUser,loggedInUser, LogInUser, LogOut } = useAuthentication()


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
            }
        }
        else
        {
            const userCredentials: User = {
                email: (document.getElementById('email') as HTMLInputElement)?.value,
                name: (document.getElementById('name') as HTMLInputElement)?.value,
                lastname: (document.getElementById('lastname') as HTMLInputElement)?.value,
                password: (document.getElementById('password') as HTMLInputElement)?.value,
                faculty: (document.getElementById('faculty') as HTMLInputElement)?.value,
                isLoggedIn: false
            }
            response = createUser(userCredentials)
        }
        
        
    }

    const[seePassw, setSeePassw] = useState(false)

    return(
        <div className="LogIn">
            <Layout>
                {!loggedInUser.isLoggedIn ?
                    <>
                        <form
                        className="p-5 gap-4 flex flex-col w-4/5 m-auto"
                        >
                            <input className="p-3 w-64 rounded-md bg-gray-200 my-1" type="email" placeholder="correo" id="email" required/>
                            {!LogIn && 
                                <>
                                    <input className="p-3 w-64 rounded-md bg-gray-200 my-1" type="text" placeholder="nombre" id="name" required/>
                                    <input className="p-3 w-64 rounded-md bg-gray-200 my-1" type="text" placeholder="apellidos" id="lastname"/>
                                    <input className="p-3 w-64 rounded-md bg-gray-200 my-1" type="text" placeholder="facultad" id="faculty" required/>
                                </>
                            }
                            <div className="flex">
                                <input className="p-3 w-64 rounded-md bg-gray-200 my-1" type={seePassw ? 'text' : 'password'} placeholder="contraseña" id="password" required />
                                <div className="mt-4 -ml-10 w-0" onClick={()=>setSeePassw(!seePassw)}>
                                    {
                                        !seePassw 
                                        ? 
                                        <IconEye/>
                                        :
                                        <IconEyeClosed />
                                    
                                    }
                                </div>
                            </div>
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
                    </>
                    :
                    <button 
                        onClick={()=>LogOut()}
                        className="bg-[#5a1024] text-white w-4/5 m-auto rounded-md ml-10 py-5"
                        >
                            Cerrar Sesión 
                    </button>
                }
            </Layout>
        </div>
    )
}