import Layout from "../../Components/Layout/Layout";
import LittleSportCard from "../../Components/LittleSportCard/LittleSportCard";
export default function Sports()
{
    return(
        <Layout>
            <h2 className="text-center text-rose-950 my-10 mb-5 font-bold">Deportes</h2>
            <div className="display flex flex-wrap wrap px-7">
                <LittleSportCard sportName={"Atletismo"}/>
                <LittleSportCard sportName={"Taekwondo"}/>
                <LittleSportCard sportName={"Tenis"}/>
                <LittleSportCard sportName={"Taekwondo2"}/>
                <LittleSportCard sportName={"Tenis2"}/>
            </div>
        </Layout>
    )
}