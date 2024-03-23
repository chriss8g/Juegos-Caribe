import Layout from "../../Components/Layout/Layout";
import RedTextHeader from "../../Components/RedTextHeaders/RedTextHeader";

export default function DeporteDetallado()
{
    const Sport = [
        {
            "id" : "1",
            "name" : "Fútbol",
            "imagen" : "./futbolMain.png",
            "logo" : "./football.svg",
            "phase" : "Fase Final"
        }
    ]
    return(
        <Layout>
            <div className="MobileView">
                <div className="sport-images-container w-[100%] mt-2 relative">
                    <div className="sport-img-main-container">
                        <img src={Sport[0].imagen} alt="Sport" className="rounded-b-xl"/>
                    </div>
                    <div
                        className="sport-logo h-[100%] absolute left-0 bottom-0 rounded-r-[20%] backdrop-blur-[1px] bg-[#00000078] flex flex-col items-center justify-center pr-10">
                        <img src={Sport[0].logo} alt="logo del deporte" className=" w-1/3"/>
                        <p className="text-white font-bold text-2xl mt-1">{Sport[0].name}</p>
                        <p className="text-white font-medium text-lg mt-0.5">{Sport[0].phase}</p>
                    </div>
                </div>

                <RedTextHeader title="Información General"/>

                <div className="container">

                    <p className="text-red-950 text-sm mt-5 text-center">Lorem ipsum dolor sit amet consectetur
                        adipisicing elit.
                        Quidem beatae veniam animi voluptatum!
                        Velit, deserunt eum voluptatum nesciunt exercitationem aperiam corrupti dicta ea dignissimos
                        assumenda aspernatur laudantium quisquam numquam facere. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Animi necessitatibus odio vitae officiis? Expedita, reprehenderit optio
                        suscipit
                        adipisci sed unde. Rem, deleniti. Temporibus consequuntur error eligendi perspiciatis,
                        doloremque
                        assumenda ratione!
                    </p>
                </div>
                <RedTextHeader title="Estado de la competición"/>

                <RedTextHeader title="Equipos"/>

            </div>
        </Layout>
    )
}