import "../globals.css"
import "./contact.css"
import Layout from "../../Components/Layout/Layout";

export default function Contactenos()
{
    return(
        <Layout>
            <div className="MobileView ">
                <div className="container ContactUs">
                    <p className="contactenos-text text-black font-black text-center text-2xl">Contáctenos</p>
                    
                    <p className="text-red-950 text-center text-lg mb-3">¿Cómo reportar un nombre ofensivo de algún equipo?</p>
                    <p className="mb-12 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem beatae veniam animi voluptatum! Velit, deserunt eum voluptatum nesciunt exercitationem aperiam corrupti dicta ea dignissimos assumenda aspernatur laudantium quisquam numquam facere. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi necessitatibus odio vitae officiis? Expedita, reprehenderit optio suscipit adipisci sed unde. Rem, deleniti. Temporibus consequuntur error eligendi perspiciatis, doloremque assumenda ratione!</p>
                    
                    <p className="text-red-950 text-center text-lg mb-3">¿Cómo encontrar ayuda en la página?</p>
                    <p className="mb-12 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem beatae veniam animi voluptatum! Velit, deserunt eum voluptatum nesciunt exercitationem aperiam corrupti dicta ea dignissimos assumenda aspernatur laudantium quisquam numquam facere. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi necessitatibus odio vitae officiis? Expedita, reprehenderit optio suscipit adipisci sed unde. Rem, deleniti. Temporibus consequuntur error eligendi perspiciatis, doloremque assumenda ratione!</p>
                    
                    <p className="text-red-950 text-center text-lg mb-3">Requerimientos generales</p>
                    <p className="mb-12 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem beatae veniam animi voluptatum! Velit, deserunt eum voluptatum nesciunt exercitationem aperiam corrupti dicta ea dignissimos assumenda aspernatur laudantium quisquam numquam facere. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi necessitatibus odio vitae officiis? Expedita, reprehenderit optio suscipit adipisci sed unde. Rem, deleniti. Temporibus consequuntur error eligendi perspiciatis, doloremque assumenda ratione!</p>

                    <div className="Form">
                        <form action="">
                            <p className="text-red-950 text-lg text-start font-bold">Formulario de ayuda</p>
                            <p className="text-lg">Nombre y Apellidos</p>
                            <input type="text" name="name" id="username" placeholder="Ejemplo: Tomás Rodríguez"/>
                            <p className="text-lg">Correo electrónico</p>
                            <input type="mail" name="email" id="usermail" placeholder="Ejemplo: tomas.rdgz@gmail.com"/>
                            <p className="text-lg">Comentarios</p>
                            <textarea name="comment" id="comment" placeholder="Escribe lo que piensas de nuestra web"/>
                        </form>
                        <div className="flex justify-end items-end buttonsRow">
                            <button className="mr-1 bg-white text-red-950">Cancelar</button>
                            <button className="bg-[#5a1024] text-white">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}