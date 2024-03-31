'use client'
import "../globals.css"
import Layout from "../../Components/Layout/Layout"
import TitleText from "../../Components/TitleText/TitleText"
import SubtitleText from "../../Components/SubtitleText/SubtitleText"

export default function Contactenos()
{
    const text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos ex, consectetur cupiditate tempore maiores reprehenderit esse enim vel doloribus. Voluptatem sequi veritatis hic illum iste adipisci recusandae atque dolore! Debitis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid recusandae iste, quibusdam a qui deleniti animi amet. Inventore similique fugiat, consequuntur nihil nemo sit perferendis quas placeat architecto, harum possimus?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos ex, consectetur cupiditate tempore maiores reprehenderit esse enim vel doloribus. Voluptatem sequi veritatis hic illum iste adipisci recusandae atque dolore! Debitis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid recusandae iste, quibusdam a qui deleniti animi amet. Inventore similique fugiat, consequuntur nihil nemo sit perferendis quas placeat architecto, harum possimus?"


    return(
        <Layout>
            <div>
                <TitleText title={"Política de privacidad"} text={"En Juegos Caribe, nos comprometemos a proteger la privacidad de nuestros usuarios y visitantes. Esta Política de Privacidad describe cómo recopilamos, utilizamos, protegemos y compartimos la información personal que obtenemos de los usuarios de nuestro sitio web."}/>
                <SubtitleText title={"Reglas a conocer"} text={"Mantendremos la información personal de los usuarios segura mediante medidas de seguridad adecuadas para prevenir accesos no autorizados, divulgación, alteración o destrucción de dicha información. No venderemos, comerciaremos ni alquilaremos la información personal de los usuarios a terceros. Los usuarios pueden comentar en las noticias deportivas publicadas en nuestro sitio web. Sin embargo, nos reservamos el derecho de moderar los comentarios y eliminar aquellos que sean inapropiados, ofensivos o que violen nuestras políticas de uso del sitio. No seremos responsables del uso de la información personal que los usuarios decidan compartir en los comentarios públicos del sitio web."}/>
            </div>
            
        </Layout>
    )
}