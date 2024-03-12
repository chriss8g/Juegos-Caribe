'use client'
import Layout from "../../Components/Layout/Layout"
import TextWithTitle from "../../Components/TextWithTitle/TextWithTitle"
import TextWithTitle2 from "../../Components/TextWithTitle2/TextWithTitle2"

export default function TermsAndConditions()
{
    const txt = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam modi aliquid at ad quis, illo pariatur in voluptatibus tenetur facere doloremque labore nesciunt officiis nostrum hic temporibus, a dolorem totam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo et eum earum autem aliquid illo, tempore incidunt quae ipsum nam, quia dolores neque aut a temporibus eius perferendis dolorum ea?"

    return(
        <Layout>
            <TextWithTitle title={"Términos y Condiciones"} text={txt} />
            <TextWithTitle2 title={"Términos de participación"} text={txt}/>
            <TextWithTitle2 title={"Por la presente usted está de acuerdo con lo siguiente:"} text={txt}/>
        </Layout>
    )
}