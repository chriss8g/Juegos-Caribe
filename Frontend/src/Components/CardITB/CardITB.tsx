import Image from "next/image";
import "./CardITB.css";

export default function CardITB({name, image, body}) {
    return (
        name !== undefined && body !== undefined && image !== undefined &&
            <div className="CardITB MobileView container">
                <div className="Logo">
                    <Image src={image} width={100} height={100} alt="" className="image"/>
                </div>
                <h2>{name}</h2>
                <div className="body-container">
                    <p>{body}</p>
                </div>
            </div>
    )
}
