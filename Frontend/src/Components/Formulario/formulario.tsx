import { useEffect, useState } from "react";
import "../../app/Contactenos/contact.css"
import { getCookie } from "cookies-next";
import axios from "axios";

export default function Formulario({comment})
{
    const API = axios.create({
        baseURL: process.env.API_URL
    })
    const [loggedIn, setLoggedIn] = useState(false)
    
    useEffect(()=>{
        API.get(`${process.env.API_URL}/user/`)
        .then((response)=>{
            (response.data.map(user=>{
                if(user.str == getCookie("loggedInUser"))
                {
                    let lastLog = new Date(user["last_login"]).getTime()
                    let Now = new Date().getTime()

                    // Hours after last login
                    let difference = Now - lastLog / (1000 * 60 * 60);
                    setLoggedIn(difference < 8)
                }
            }))
        })
    },[])

    return (
        loggedIn && 
            <div className="Form">
                <form action="">
                    <p className="text-red-950 text-lg text-start font-bold">{comment ? "Sección de comentarios" : "Formulario de ayuda"}</p>
                    <p className="text-lg">Nombre y Apellidos</p>
                    <input type="text" name="name" id="username" placeholder="Ejemplo: Tomás Rodríguez"/>
                    <p className="text-lg">Correo electrónico</p>
                    <input type="mail" name="email" id="usermail" placeholder="Ejemplo: tomas.rdgz@gmail.com"/>
                    <p className="text-lg">Comentarios</p>
                    <textarea name="comment" id="comment" placeholder="Escribe tu comentario sobre la noticia"/>
                </form>
                <div className="flex justify-end items-end buttonsRow">
                    <button className="mr-1 bg-white text-red-950">Cancelar</button>
                    <button className="bg-[#5a1024] text-white">Enviar</button>
                </div>
            </div>
    );

}

