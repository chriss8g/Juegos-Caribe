'use client'
import Image from "next/image"
import { CSSProperties } from "react"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./pagination.css"

interface PaginationProps {
    itemComponent: React.ElementType; // Esto permite pasar cualquier componente React como prop
    data: any[]; // Asegúrate de tipar tus datos adecuadamente
}

const Pagination: React.FC<PaginationProps> = ({ itemComponent: ItemComponent, data }) =>
{
    
    const arrowStyles : CSSProperties= {
        position: 'absolute',
        zIndex: 2,
        bottom: 10,
        width: 20,
        height: 20,
        cursor: 'pointer',
    };

    return(
        <div className="Pagination MobileView container">
        
            <Carousel showArrows showStatus={false} centerMode centerSlidePercentage={50}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 20 }}>
                            <Image aria-disabled="true" src="/left.svg" alt="" fill className="image"/>
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 20 }}>
                            <Image aria-disabled="true" src="/right.svg" alt="" fill className="image"/>
                        </button>
                    )
                }
                
            >
                {data.map((element, index)=>(
                    <div key={index}>
                        <ItemComponent name={element.name} image={element.image} body={element.body}/>
                    </div>
                ))}  
            </Carousel>
        </div>
    )
};
export default Pagination;