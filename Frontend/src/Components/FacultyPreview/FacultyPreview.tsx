import Image from "next/image"
import "./FacultyPreview.css"

export default function FacultyPreview({name, image})
{
    return(
        name !== undefined && image !== undefined &&
            <div className="flex  lg:flex-[0_0_auto] flex-col justify-between align-center lg:ml-2 lg:mr-2  px-[8%] py-[5%] rounded-[15px] w-[37%] shadow-lg  lg:py-[2%] lg:px-[2.5%] lg:w-[26%] container">
                <div className="facultyLogo">
                    <Image src={image} width={100} height={100} alt="" className="image"/>
                </div>
                <h2>{name}</h2>
            </div>
    )
}