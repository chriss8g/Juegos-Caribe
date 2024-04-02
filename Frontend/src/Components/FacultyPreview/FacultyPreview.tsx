import Image from "next/image"
import "./FacultyPreview.css"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function FacultyPreview({name, image, id})
{
    useEffect(()=>{
        console.log(id)
    },[])
    const router = useRouter()
    
    return(
        name !== undefined && image !== undefined &&
            <div onClick={()=>router.push("/Facultades/")} className="flex lg:flex-[0_0_auto] flex-col justify-center align-center lg:ml-2 lg:mr-2  px-1 py-[5%] rounded-[15px] w-10/12 h-[25vh] mx-1 shadow-lg  lg:py-[2%] lg:px-[2.5%] lg:w-[26%]">
                <div className="facultyLogo">
                    <Image src={image} width={100} height={100} alt="" className="image"/>
                </div>
                <p className="text-black text-lg my-3 text-center">{name}</p>
            </div>
    )
}