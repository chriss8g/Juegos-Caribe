'use client'
import "../globals.css"
import Layout from "../../Components/Layout/Layout"
import TextWithTitle from "../../Components/TextWithTitle/TextWithTitle"

export default function Contactenos()
{
    const text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos ex, consectetur cupiditate tempore maiores reprehenderit esse enim vel doloribus. Voluptatem sequi veritatis hic illum iste adipisci recusandae atque dolore! Debitis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid recusandae iste, quibusdam a qui deleniti animi amet. Inventore similique fugiat, consequuntur nihil nemo sit perferendis quas placeat architecto, harum possimus?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos ex, consectetur cupiditate tempore maiores reprehenderit esse enim vel doloribus. Voluptatem sequi veritatis hic illum iste adipisci recusandae atque dolore! Debitis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid recusandae iste, quibusdam a qui deleniti animi amet. Inventore similique fugiat, consequuntur nihil nemo sit perferendis quas placeat architecto, harum possimus?"


    return(
        <Layout>
            <TextWithTitle title={"Política de privacidad"} text={text}/>

            <div className="mx-6">
            <div className="text-center text-gray-600 pb-3" >
                <h3 className="font-bold text-[#5a1024ac] mt-6">Reglas a conocer</h3>
            </div>
            <p className={`text-gray-400 mt-5`}>{text}</p>
            <p className={`text-gray-400 mt-5`}>{text}</p>
        </div>
        </Layout>
    )
}