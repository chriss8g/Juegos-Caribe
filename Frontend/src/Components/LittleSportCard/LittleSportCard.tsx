'use client'
import Image from "next/image"

interface SportCardProps {
    sportName: string; 
    sportPicture: string; 
}

const LittleSportCard: React.FC<SportCardProps> = ({sportName, sportPicture}) =>
{

    return(
        <div className="w-full SportCard flex flex-col py-2 items-center">
            <div className="circle-container grid justify-center items-center">
                <div className="bg-red-950 rounded-[50%] flex justify-center align-center h-[12vh] w-[12vh]">
                    <div className="sportImage">
                        <Image src={sportPicture} alt="" fill className="image "/>
                    </div>
                </div>
            </div>  
            <p className="mt-2 mb-2 text-lg text-gray-900">{sportName}</p>
        </div>

    )
}
export default LittleSportCard;

// export default function SportCard({sportName, sportPicture})
// {
//
//     return(
//         <div className="SportCard w-[45%] my-[5%] mx-[2.5%] p-[5%] lg:p-[2%] lg:my-0 lg:w-1/5">
//             {
//
//                 <div className="circle-container">
//                     <div className="circle flex justify-center align-center">
//                         <div className="sportImage">
//                             <Image src={sportPicture} alt="" fill className="image"/>
//                         </div>
//                     </div>
//                     <p className="lg:mt-3 text-xl font-semibold text-rose-950">{sportName}</p>
//                 </div>
//
//             }
//         </div>
//     )
// }