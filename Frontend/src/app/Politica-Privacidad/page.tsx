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
                <TitleText title={"Política de privacidad"} text={text}/>
                <SubtitleText title={"Reglas a conocer"} text={text}/>
            </div>
            
        </Layout>
    )
}