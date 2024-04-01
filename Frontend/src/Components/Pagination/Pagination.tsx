'use client'
import Image from "next/image"
import { CSSProperties } from "react"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./pagination.css"

interface PaginationProps {
    itemComponent: React.ElementType; // Esto permite pasar cualquier componente React como prop
    data: any[]; // Asegúrate de tipar tus datos adecuadamente
    percentage: number; // Add the percentage prop
    mainSec: boolean; //Para distinguir propiedades entre el carrusel ´de Inicio y el resto
}

const Pagination: React.FC<PaginationProps> = ({ itemComponent: ItemComponent, data, percentage, mainSec }) =>
{

    const arrowStyles : CSSProperties= {
        position: 'absolute',
        zIndex: 2,
        bottom: '0.3rem',
        width: 20,
        height: 20,
        cursor: 'pointer',
    };
    return(
        <div className="Pagination MobileView relative">

            <Carousel showArrows showStatus={false} centerMode centerSlidePercentage={percentage}
                      renderArrowPrev={(onClickHandler, hasPrev, label) =>
                          <button type="button" onClick={hasPrev ? onClickHandler : null} title={label} style={{ ...arrowStyles, left: 20}}>
                              <Image aria-disabled={!hasPrev} src={hasPrev? "/left.svg" : "/left-disabled.svg"} alt="" fill className="image"/>
                          </button>
                      }
                      renderArrowNext={(onClickHandler, hasNext, label) =>
                          <button type="button" onClick={hasNext ? onClickHandler : null} title={label} style={{ ...arrowStyles, right: 20}}>
                              <Image aria-disabled={!hasNext} src={hasNext? "/right.svg" : "/right-disabled.svg"} alt="" fill className="image"/>
                          </button>
                      }
            >
                {data.map((element, index)=>(
                    <div key={index} className={mainSec?"mb-9":""}>
                        <ItemComponent name={element.name} image={element.image ? element.image :( element.logo)? element.logo : ""} body={element.body ?  element.body : ""}/>
                    </div>
                ))}
            </Carousel>
        </div>
    )
};
export default Pagination;