'use client'
import Layout from "../../Components/Layout/Layout"
import TitleText from "../../Components/TitleText/TitleText"
import SubtitleText from "../../Components/SubtitleText/SubtitleText"

export default function TermsAndConditions()
{
    const txt = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam modi aliquid at ad quis, illo pariatur in voluptatibus tenetur facere doloremque labore nesciunt officiis nostrum hic temporibus, a dolorem totam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo et eum earum autem aliquid illo, tempore incidunt quae ipsum nam, quia dolores neque aut a temporibus eius perferendis dolorum ea?"

    return(
        <Layout>
            <div>
                <TitleText title={"Términos y Condiciones"} text={"Por favor, lee estos términos y condiciones de uso cuidadosamente antes de utilizar nuestro sitio web."} />
                <SubtitleText title={"Términos de participación"} text={"Al participar en cualquier aspecto interactivo de nuestro sitio web, como comentarios en noticias, interacción con las estadísticas de juegos y jugadores, o cualquier otra actividad similar, aceptas cumplir con nuestros términos de participación. Nos reservamos el derecho de eliminar cualquier contenido que consideremos inapropiado, ofensivo o que viole estos términos."}/>
                <SubtitleText title={"Por la presente usted está de acuerdo con lo siguiente:"} text={"No publicar contenido difamatorio, obsceno, amenazante o que viole los derechos de propiedad intelectual de terceros. Respetar las opiniones y derechos de otros usuarios al participar en debates y comentarios. Al utilizar nuestro sitio web, aceptas nuestras prácticas de privacidad descritas en dicha política."
}/>
            </div>
        </Layout>
    )
}