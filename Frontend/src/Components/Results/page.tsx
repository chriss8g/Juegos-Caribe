import { useEffect, useState } from "react";
import ExportToPDFButton from "../ExportButton/ExportButton";
import ResultsTable from "../ResultsTable/page";
import useAdministration from "../../hooks/useAdministration";

export default function Results({facultyId})
{
    const{getDataByIdFromEndpoint, DataByIdFromEndpoint} = useAdministration()


    useEffect(()=>{
        console.log(document.getElementById('export'))
        getDataByIdFromEndpoint(+facultyId, "/faculty/statistics")
    },[])

    

    const[data, setData] = useState<FacultyData>();

    useEffect(()=>{
        setData(DataByIdFromEndpoint as unknown as FacultyData);
    },[DataByIdFromEndpoint]);

    return(
        <div className="flex flex-col items-center justify-center">
            <p className="text-black font-medium text-lg mt-20">Resultados</p>
            <div
                className="results-main-container flex flex-col w-[90%] m-2  bg-white py-4 px-2 rounded-xl shadow-lg items-center mb-12">
                <p className="text-center text-lg text-gray-950">
                    Mejor resultado en la historia:
                </p>
                {
                    data &&
                    <div className="flex justify-between mt-3">
                        <p className="mx-3 text-center">{data.best_season.edition} edición</p>
                        <p className="mx-3 text-center">Lugar: {data.best_season.ranking}</p>
                        <p className="mx-3 text-center">{data.best_season.medals} medallas</p>
                    </div>
                }

                <p className="text-center text-lg text-gray-950 mt-7 mb-2">
                    Últimas ediciones:
                </p>

                <table className="results-table border-separate border-spacing-x-5" id="export">
                    <thead>
                    <tr>
                        <th>Edición</th>
                        <th>Lugar <br/> obtenido</th>
                        <th>Medallas <br/> obtenidas</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data &&
                        data.seasons.map((row, index) => (
                        <tr key={index}>
                            <td className="text-center">{row.edition}</td>
                            <td className="text-center">{row.ranking}</td>
                            <td className="text-center">{row.medals}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className="">
                    <ExportToPDFButton input={document.getElementById('export') || null}/>
                </div>

            </div>
        </div> 
    )
}
interface FacultyData {
best_season: {
    edition: number;
    ranking: number;
    medals: number;
};
seasons: Array<{
    edition: number;
    ranking: number;
    medals: number;
}>;
}