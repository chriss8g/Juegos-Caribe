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
                    
                    <h3>Somos la FEU de la Universidad de La Habana</h3>
                    <p>+53 52113131</p>
                    <p className="mb-15">correo@dominio.extension</p>
                    
                    <div className="Form mt-10">
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