import Image from "next/image";
import "./CardITB.css";

export default function CardITB({name, image, body}) {
    return (
        name !== undefined && body !== undefined && image !== undefined &&
            <div className="px-[4%] MobileView container">
                <div className="CardITB-inner-container flex justify-center flex-col">
                    <div className="flex justify-center">
                        <Image src={image} width={100} height={100} alt="" className="image"/>
                    </div>
                    <p className="text-red-950 font-semibold">{name}</p>
                    <div className="text-black">
                        <p>{body}</p>
                    </div>
                </div>
            </div>
    )
}
