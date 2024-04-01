import Image from "next/image";
import "../MedalTable/medalTable.css";
export default function MedalTableHeader()
{
    return (
        <div className="tableTitle align-center flex">
            <p className="lg:p-1 lg:ml-5 lg:font-medium lg:text-3xl font-black text-xl text-white mx-auto">Medallero</p>
            {/* <div className="filters cursor-pointer">
                <p>Filtros</p>
                <div className="moreImg">
                    <Image alt="" src="/more-white.svg" fill className="image"/>
                </div>
            </div> */}
        </div>
    )
}
