import SportCard from "../SportCard/SportCard"
import "./DailySports.css"

export default function DailySports()
{
    return(
        <div className="DailySports container">
            <h2 className="sectionTitle text-3xl font-bold">Deportes del día</h2>
            <div className="SportsList">
                <SportCard sportName={"Atletismo"}/>
                <SportCard sportName={"Taekwondo"}/>
                <SportCard sportName={"Tenis"}/>
                <SportCard sportName={"Atletismo2"}/>
                <SportCard sportName={"Taekwondo2"}/>
                <SportCard sportName={"Tenis2"}/>
            </div>
        </div>

    )
}