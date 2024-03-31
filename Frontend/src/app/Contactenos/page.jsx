import "../globals.css"
import "./contact.css"
import Layout from "../../Components/Layout/Layout";

export default function Contactenos()
{
    return(
        <Layout>
            <div className="MobileView ">
                <div className="container ContactUs">
                    <h2>Contáctenos</h2>
                    
                    <h3>Somos la FEU de la Universidad de La Habana</h3>
                    <p>+53 52113131</p>
                    <p className="mb-15">correo@dominio.extension</p>
                    
                    <div className="Form mt-10">
                        <form action="">
                            <h3>Formulario de ayuda</h3>
                            <p>Nombre y Apellidos</p>
                            <input type="text" name="name" id="username" />
                            <p>Correo electrónico</p>
                            <input type="mail" name="email" id="usermail" />
                            <p>Comentario</p>
                            <textarea type="text" name="comment" id="comment"/>
                        </form>
                        <div className="buttonsRow">
                            <button>Cancelar</button>
                            <button>Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}