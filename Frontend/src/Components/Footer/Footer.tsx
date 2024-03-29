import "./Footer.css"
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"

export default function Footer()
{
    const year = new Date().getFullYear()
    const router = useRouter()
    return(
        <div className="Footer MobileView container mt-20">
            <div>
                <div className="Logo">
                    <Image src="/logo.svg" alt="" fill className="image"/>
                </div>
                <div className="socialMedias">
                
                </div>
            </div>
            <div className="columns">
                <div className="footerRow">
                    <div className="group">
                        <a href="/">Inicio</a><br /><br />
                        <div className="groupInfo">
                            <p  className="groupHead" >Medallero</p>
                            <p className="mt-2">Deportes del Día</p>
                            <p className="mt-2">Resumen de Noticias</p>
                        </div>
                    </div>
                    <div className="group">
                        <a href="/Deportes">Deportes</a><br /><br />
                        <div className="groupInfo">
                            <p onClick={()=>{router.push("/Deportes")}} className="groupHead" >Individuales</p>
                            <p onClick={()=>{router.push("/Deportes")}} className="mt-2">Colectivos</p>
                        </div>
                    </div>
                </div>
                <div className="footerRow">
                    <div className="group">
                        <a href="/Noticias">Noticias</a><br /><br />
                        <div className="groupInfo">
                            <p onClick={()=>{router.push("/Noticias")}} className="groupHead mt-2">Noticias relevantes</p>
                        </div>
                    </div>
                    
                    <div className="group">
                        <a href="/">Juegos Caribe</a><br /><br />
                        <div className="groupInfo">
                            <p onClick={()=>{router.push("/Reglamento")}}>Reglamento</p>
                            <p className="mt-2" onClick={()=>{router.push("/Comisionado")}} >Comisión</p>
                        </div>
                    </div>
                </div>
                <div className="footerRow">
                    <div className="group">
                        <a href="/Cronograma">Cronograma</a><br /><br />
                    </div>
                    <div className="group">
                        <a href="/Facultades">Facultades</a><br /><br />
                    </div>
                </div>
            </div>
            <div className="Links">
                <div className="leftLinks">
                    <a href="/Contactenos">Contáctanos</a><br /><br />
                    <a href="/SobreNosotros">Sobre Nosotros</a>
                </div>
                <div className="rightLinks">
                    <a href="/Politica-Privacidad">Política de Privacidad</a><br /><br />
                    <a href="/Terminos-Condiciones">Términos de uso</a>
                </div>
            </div>
            <div className="rights">
                <p>&#169; {year} Juegos Caribe</p>
                <p>Todos los derechos reservados</p>
            </div>
        </div>
    )
}