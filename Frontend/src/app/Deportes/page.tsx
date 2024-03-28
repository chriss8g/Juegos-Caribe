import Layout from "../../Components/Layout/Layout";
import TournamentStatus from "../../Components/TournamentStatus/TournamentStatus";
import SportCard from "../../Components/SportCard/SportCard"
export default function Sports()
{
    return(
        <Layout>
            {/* <TournamentStatus teams={[]}/> */}
            <h2 className="text-center sectionTitle font-bold">Deportes</h2>
            <div className="display flex flex-wrap wrap">
                <SportCard sportName={"Atletismo"}/>
                <SportCard sportName={"Taekwondo"}/>
                <SportCard sportName={"Tenis"}/>
                <SportCard sportName={"Atletismo2"}/>
                <SportCard sportName={"Taekwondo2"}/>
                <SportCard sportName={"Tenis2"}/>
            </div>
        </Layout>
    )
}