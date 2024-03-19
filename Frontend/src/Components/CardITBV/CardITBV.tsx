import Image from "next/image";
import "./CardITBV.css";

export default function CardITBV({name, image, body}) {
    return (
        name !== undefined && body !== undefined && image !== undefined &&
            <div className="CardITB MobileView container flex justify-center">
                <div className="Logo">
                    <Image src={image} width={100} height={100} alt="" className="image"/>
                </div>
                <div className="body-container">
                    <h2>{name}</h2>
                    <p>{body}</p>
                </div>
            </div>
    )
}
