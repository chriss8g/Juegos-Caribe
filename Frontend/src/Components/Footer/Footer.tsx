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
                        <a href="/">Inicio</a><br/><br/>
                        <div className="groupInfo">
                            <p className="groupHead text-sm">Medallero</p>
                            <p className="mt-0.5 text-sm">Deportes del Día</p>
                            <p className="mt-0.5 text-sm">Resumen de Noticias</p>
                        </div>
                    </div>
                    <div className="group">
                        <a href="/Deportes">Deportes</a><br/><br/>
                        <div className="groupInfo">
                            <p onClick={() => {
                                router.push("/Deportes")
                            }} className="groupHead text-sm">Individuales</p>
                            <p onClick={() => {
                                router.push("/Deportes")
                            }} className="mt-0.5 text-sm">Colectivos</p>
                        </div>
                    </div>
                </div>
                <div className="footerRow">
                    <div className="group">
                        <a href="/Noticias">Noticias</a><br/><br/>
                        <div className="groupInfo">
                            <p onClick={() => {
                                router.push("/Noticias")
                            }} className="groupHead mt-0.5 text-sm">Noticias relevantes</p>
                        </div>
                    </div>

                    <div className="group">
                        <a href="/">Información</a><br/><br/>
                        <div className="groupInfo">
                            <p className="text-sm" onClick={() => {
                                router.push("/Reglamento")
                            }}>Reglamento</p>
                            <p className="mt-0.5 text-sm" onClick={() => {
                                router.push("/Comisionado")
                            }}>Comisión</p>
                        </div>
                    </div>
                </div>
                <div className="footerRow">
                    <div className="group">
                        <a href="/Cronograma">Cronograma</a><br/><br/>
                    </div>
                    <div className="group">
                        <a href="/Facultades">Facultades</a><br/><br/>
                    </div>
                </div>
            </div>

            <table className="border-t-2 border-b-2 w-full border-gray-400">
                <tbody>
                <tr>
                    <td className="py-5">
                        <a className="text-sm underline" href="/Contactenos">Contáctanos</a><br/>
                        <a className="text-sm underline" href="/">Sobre Nosotros</a>
                    </td>
                    <td className="pl-6 py-5">
                        <a className="text-sm underline" href="/Politica-Privacidad">Política de Privacidad</a><br/>
                        <a className="text-sm underline" href="/Terminos-Condiciones">Términos de uso</a>
                    </td>
                </tr>
                </tbody>
            </table>

            <div className="rights">
                <p className="text-red-950">&#169; {year} Juegos Caribe</p>
                <p className="text-red-950">Todos los derechos reservados</p>
            </div>
        </div>
    )
}