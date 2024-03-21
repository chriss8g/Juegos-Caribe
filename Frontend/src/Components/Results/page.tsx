export default function Results(data)
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
            <p className="text-center text-sm text-gray-950">
                Mejor resultado en la historia:
            </p>

            <div className="flex justify-between mt-3">
                <p className="mx-3">XXXIV edición</p>
                <p className="mx-3">2do lugar</p>
                <p className="mx-3">23 medallas</p>
            </div>

            <p className="text-center text-sm text-gray-950 mt-7">
                5 ediciones anteriores:
            </p>

        {/*    INSERTAR TABLA HACER CON IA O ALGO ASI*/}

        </div>
    )
}