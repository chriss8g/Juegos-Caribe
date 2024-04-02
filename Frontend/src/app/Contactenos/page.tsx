import "../globals.css"
import "./contact.css"
import Layout from "../../Components/Layout/Layout";
import Formulario from "../../Components/Formulario/formulario";

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

                    <Formulario comment={false}/>
                </div>
            </div>
        </Layout>
    )
}