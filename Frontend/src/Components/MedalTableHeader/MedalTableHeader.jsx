import Image from "next/image";
import "../MedalTable/medalTable.css";
export default function MedalTableHeader()
{
    return (
        <div className="tableTitle flex">
            <h3 className="lg:p-1 lg:ml-5 lg:font-medium lg:text-3xl">Medallero</h3>
            <div className="filters cursor-pointer">
                <p>Filtros</p>
                <div className="moreImg">
                    <Image alt="" src="/more-white.svg" fill className="image"/>
                </div>
            </div>
        </div>
    )
}
