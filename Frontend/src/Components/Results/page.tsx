import ResultsTable from "../ResultsTable/page";

export default function Results({data})
{
    // const CAthlete =[
    //     {
    //         "id": 1,
    //         "sport": "Fútbol",
    //         "name": "Luka Modric Ramírez",
    //         "imagen": "/athlete1.png",
    //         "pos": "Medio Campo",
    //         "num": 10
    //     }]

    return(
        <div
            className="results-main-container flex flex-col w-[90%] m-2 bg-white py-4 px-2 rounded-xl shadow-lg items-center">
            <p className="text-center text-lg text-gray-950">
                Mejor resultado en la historia:
            </p>

            <div className="flex justify-between mt-3">
                <p className="mx-3 text-lg">XXXIV edición</p>
                <p className="mx-3 text-lg">2do lugar</p>
                <p className="mx-3 text-lg">23 medallas</p>
            </div>

            <p className="text-center text-lg text-gray-950 mt-7 mb-2">
                5 ediciones anteriores:
            </p>

       <ResultsTable/>

        </div>
    )
}