'use client'
export default function FacultyCard({faculty})
{
    const breakLine = faculty.name.length > 15;

    return (
        <div className="faculty-card-main-container -translate-x-[8%] relative flex my-5 w-full">
            <div className="faculty-image-container my-3 flex justify-center items-center w-2/3 relative translate-x-1/2 bg-white p-1 rounded-[50%] overflow-hidden  shadow-gray-200 shadow-[2px_1px_8px_5px_#aeaeae73]">
                <div className="w-full">
                    <img src={faculty.image} alt="faculty-logo"/>
                </div>
            </div>
            <div className="faculty-name-container pl-10 py-8 bg-gradient-to-r from-white to-transparent rounded-xl flex items-center w-[200%] shadow-gray-200 shadow-[3px_6px_13px_2px_#aeaeae73] border-white border-2">
                    <p className="text-nowrap ml-3 text-sm">Facultad de {breakLine ? <br/>: ""} {faculty.name}</p>
            </div>
            <div className="arrow-right-container justify-center items-center flex w-[28%] ml-[2%]">
                <img src="/chevron-right.svg" alt="arrow" className=""/>
            </div>
        </div>
    )
}