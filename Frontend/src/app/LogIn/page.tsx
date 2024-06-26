'use client'
import useAuthentication from "../../hooks/useAuthentication";
import Layout from "../../Components/Layout/Layout";
import React, { useState } from "react";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";
import { RegisterUserInfo, LoginInfo } from "../../types/User";
import { toast } from 'react-toastify';

export default function LogIn()
{
    const[LogIn, setLogIn] = useState(true)
    const {  RegisterUser, LogUser, loggedIn, LogOut} = useAuthentication()

    function handleOnSubmit(e: React.MouseEvent) {
        e.preventDefault()
        var response = ""
        if(validPassw)
        {
            if(!LogIn)
            {
                const registerUserInfo : RegisterUserInfo = {
                    username: (document.getElementById('email') as HTMLInputElement)?.value,
                    email: (document.getElementById('email') as HTMLInputElement)?.value,
                    first_name: (document.getElementById('first_name') as HTMLInputElement)?.value,
                    last_name: (document.getElementById('last_name') as HTMLInputElement)?.value,
                    password1: (document.getElementById('password') as HTMLInputElement)?.value,
                    password2: (document.getElementById('passwordConfirm') as HTMLInputElement)?.value
                }
                RegisterUser(registerUserInfo)
                setLogIn(true)
            }
            else
            {
                const loginInfo: LoginInfo = {
                    username: (document.getElementById('email') as HTMLInputElement)?.value,
                    email: (document.getElementById('email') as HTMLInputElement)?.value,
                    password: (document.getElementById('password') as HTMLInputElement)?.value,
                }
                LogUser(loginInfo)
            }
        }
        else
        {
            toast.error("Contraseña no válida")
        }
        
        
    }

    const[seePassw, setSeePassw] = useState(false)
    const[seeConfPassw, setSeeConfPassw] = useState(false)
    const [validPassw, setValidPassw] = useState(true)

    function validatePassw(e)
    {
        if(e.target.value.length < 8 && e.target.value.length > 0) setValidPassw(false)
        else setValidPassw(true)
    }

    return(
        <div className="LogIn">
            <Layout>
                {!loggedIn ?
                    <>
                        <form
                        className="p-5 gap-4 flex flex-col w-4/5 m-auto"
                        >
                            <input className="p-3 w-64 rounded-md bg-gray-200 my-1" type="email" placeholder="correo" id="email" required/>
                            {!LogIn && 
                                <>
                                    <input className="p-3 w-64 rounded-md bg-gray-200 my-1" type="text" placeholder="nombre" id="first_name" required/>
                                    <input className="p-3 w-64 rounded-md bg-gray-200 my-1" type="text" placeholder="apellidos" id="last_name"/>
                                    <input className="p-3 w-64 rounded-md bg-gray-200 my-1" type="text" placeholder="facultad" id="faculty" required/>
                                </>
                            }
                            <div className="">
                                <div className="flex">
                                    <input className="p-3 w-64 rounded-md bg-gray-200 my-1" type={seePassw ? 'text' : 'password'} placeholder="contraseña" id="password" required onChange={(e)=>validatePassw(e)}/>
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
                                    {
                                        !validPassw && 
                                            <>
                                                <label className="text-xs text-red-600">Debe contener al menos 8 caracteres</label>
                                                <br />
                                            </>
                                    }
                            </div>
                            {!LogIn && 
                                <div className="flex">
                                    <input className="p-3 w-64 rounded-md bg-gray-200 my-1" type={seeConfPassw ? 'text' : 'password'} placeholder="confirma la contraseña" id="passwordConfirm" required />
                                    <div className="mt-4 -ml-10 w-0" onClick={()=>setSeeConfPassw(!seeConfPassw)}>
                                        {
                                            !seeConfPassw 
                                            ? 
                                            <IconEye/>
                                            :
                                            <IconEyeClosed />
                                        
                                        }
                                    </div>
                                </div>
                            }
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
                            className="bg-[#5a1024] text-white w-3/5 m-auto rounded-md ml-20 mt-16 py-3"
                            >
                                Cerrar Sesión 
                        </button>
                }
            </Layout>
        </div>
    )
}