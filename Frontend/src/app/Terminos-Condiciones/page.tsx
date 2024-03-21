'use client'
import Layout from "../../Components/Layout/Layout"
import TitleText from "../../Components/TitleText/TitleText"
import SubtitleText from "../../Components/SubtitleText/SubtitleText"

export default function TermsAndConditions()
{
    const txt = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam modi aliquid at ad quis, illo pariatur in voluptatibus tenetur facere doloremque labore nesciunt officiis nostrum hic temporibus, a dolorem totam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo et eum earum autem aliquid illo, tempore incidunt quae ipsum nam, quia dolores neque aut a temporibus eius perferendis dolorum ea?"

    return(
        <Layout>
            <div className="mb-20">
                <TitleText title={"Términos y Condiciones"} text={txt} />
                <SubtitleText title={"Términos de participación"} text={txt}/>
                <SubtitleText title={"Por la presente usted está de acuerdo con lo siguiente:"} text={txt}/>
            </div>
        </Layout>
    )
}