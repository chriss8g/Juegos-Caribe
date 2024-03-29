import Layout from "../../Components/Layout/Layout";
import TournamentStatus from "../../Components/TournamentStatus/TournamentStatus";
import SportCard from "../../Components/LittleSportCard/LittleSportCard"
import LittleSportCard from "../../Components/LittleSportCard/LittleSportCard";
export default function Sports()
{
    return(
        <Layout>
            {/* <TournamentStatus teams={[]}/> */}
            <h2 className="text-center sectionTitle font-bold">Deportes</h2>
            <div className="display flex flex-wrap wrap">
                <LittleSportCard sportName={"Atletismo"}/>
                <LittleSportCard sportName={"Taekwondo"}/>
                <LittleSportCard sportName={"Tenis"}/>
                <LittleSportCard sportName={"Atletismo2"}/>
                <LittleSportCard sportName={"Taekwondo2"}/>
                <LittleSportCard sportName={"Tenis2"}/>
            </div>
        </Layout>
    )
}