'use client'
import "../globals.css"
import Layout from "../../Components/Layout/Layout"
import TextWithTitle from "../../Components/TextWithTitle/TextWithTitle"
import TextWithTitle2 from "../../Components/TextWithTitle2/TextWithTitle2"

export default function Contactenos()
{
    const text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos ex, consectetur cupiditate tempore maiores reprehenderit esse enim vel doloribus. Voluptatem sequi veritatis hic illum iste adipisci recusandae atque dolore! Debitis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid recusandae iste, quibusdam a qui deleniti animi amet. Inventore similique fugiat, consequuntur nihil nemo sit perferendis quas placeat architecto, harum possimus?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos ex, consectetur cupiditate tempore maiores reprehenderit esse enim vel doloribus. Voluptatem sequi veritatis hic illum iste adipisci recusandae atque dolore! Debitis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid recusandae iste, quibusdam a qui deleniti animi amet. Inventore similique fugiat, consequuntur nihil nemo sit perferendis quas placeat architecto, harum possimus?"


    return(
        <Layout>
            <TextWithTitle title={"Política de privacidad"} text={text}/>
            <TextWithTitle2 title={"Reglas a conocer"} text={text}/>
        </Layout>
    )
}