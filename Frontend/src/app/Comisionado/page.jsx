'use client'
import Layout from "../../Components/Layout/Layout";
import TextWithTitle2 from "../../Components/TextWithTitle2/TextWithTitle2";
import "../globals.css"
import "./comisioner.css"

import "../../Components/FacultyPreview/FacultyPreview.css"
import Image from "next/image"
import FacultyPreview from "../../Components/FacultyPreview/FacultyPreview"
import { useEffect, useState } from "react"

export default function Comisioner()
{
    const Faculties = [
        {
            "name": "FLEX1",
            "image": "/lenguas_extranjeras.svg",
            "best-players": [],
            "sports":{
                "individual": [],
                "collective": []
            },
            "position": 10,
            "golden-medals": 1,
            "silver-medals": 0,
            "bronze-medals": 4,
            "best-historical-result": "",
            "prev-editions": [
                {
                    "edition": "L(50)",
                    "place": "5to",
                    "medals": 15
                }
            ] 
        },
        {
            "name": "FARAL2",
            "image": "/farmacia_alimentos.svg",
            "best-players": [],
            "sports":{
                "individual": [],
                "collective": []
            },
            "position": 10,
            "golden-medals": 1,
            "silver-medals": 0,
            "bronze-medals": 4,
            "best-historical-result": "",
            "prev-editions": [
                {
                    "edition": "L(50)",
                    "place": "5to",
                    "medals": 15
                }
            ] 
        }]


    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(1)
    const [Selected, setSelected] = useState(0)
    const [leftCard, setLeftCard] = useState({
        "name": Faculties[left] && Faculties[left].name,
        "image": Faculties[left] && Faculties[left].image
    })
    const [rightCard, setRightCard] = useState({
        "name": Faculties[right] && Faculties[right].name,
        "image": Faculties[right] && Faculties[right].image
    })

    const [firstTime, setFirstTime] = useState(true)
    useEffect(()=>{
        if(firstTime === true)
        {
            document.getElementById(left).classList.add("selected")
            setSelected(left)
            setFirstTime(false)
        }
    },[left, right])

    const handleRight=()=>{
        var selected = document.getElementsByClassName("selected")
        if (+selected[0].innerHTML === right+1)
        {
            document.getElementById(left).classList.add("selected")
            setSelected(right+3)
            document.getElementById(right).classList.remove("selected")
            Faculties[right+3] ? setLeftCard({"name": Faculties[right+3].name,"image": Faculties[right+3].image}): setLeftCard({})
            Faculties[right+4] ? setRightCard({"name": Faculties[right+4].name,"image": Faculties[right+4].image}): setRightCard({})
            setLeft(right+2)
            setRight(right+3)
        }
        else
        {
            document.getElementById(left).classList.remove("selected")
            setSelected(right+2)
            document.getElementById(right).classList.add("selected")
            Faculties[right+1] ? setLeftCard({"name": Faculties[right+1].name,"image": Faculties[right+1].image}): setLeftCard({})
            Faculties[right+2] ? setRightCard({"name": Faculties[right+2].name,"image": Faculties[right+2].image}): setRightCard({})
        }
    }
    const handleLeft=()=>{
        var selected = document.getElementsByClassName("selected")
        if (+selected[0].innerHTML === left+1)
        {
            setLeft(right-3)
            setRight(right-2)
            document.getElementById(left).classList.remove("selected")
            document.getElementById(right).classList.add("selected")
            setSelected(right+1)
            Faculties[left] && setLeftCard({"name": Faculties[left].name,"image": Faculties[left].image})
            Faculties[right] && setRightCard({"name": Faculties[right].name,"image": Faculties[right].image})
        }
        else
        {
            document.getElementById(left).classList.add("selected")
            setSelected(left)
            document.getElementById(right).classList.remove("selected")
            Faculties[left] && setLeftCard({"name": Faculties[left].name,"image": Faculties[left].image})
            Faculties[left+1] && setRightCard({"name": Faculties[left+1].name,"image": Faculties[left+1].image})
        }
    }


    return(
        
        <div className="Comisioner">
            <Layout>
                 <h2 className="flex justify-center font-bold font-sans text-gray-700 mt-6">Comisión</h2>   
                <div className="font-text-6">
                <TextWithTitle2 title={"Comisión Organizativa"} text={""}/>

                <div className="FacultiesPage m-5">
                <FacultyPreview name={leftCard.name} image={leftCard.image}/>
                <FacultyPreview name={rightCard.name} image={rightCard.image}/>
            </div>
            <div className="pagination">
                {
                    Selected > 0 ?
                        <div className="arrow">
                            <div className="leftArrow"  onClick={handleLeft}>
                                <Image src="/left.svg" alt="" fill className="image"/>
                            </div>
                        </div>
                        :
                        <div className=""></div>
                }
                <p className="pageNumb" id={left}>
                    {left+1}
                </p>
                <p className="pageNumb" id={right}>
                    {Selected<=Faculties.length && right+1}
                </p>
                {
                    Selected <= Faculties.length-2?
                        <div className="arrow">
                            <div className="rightArrow" onClick={handleRight}>
                                <Image aria-disabled="true" src="/right.svg" alt="" fill className="image"/>
                            </div>
                        </div>
                    :
                    <div className=""></div>
                }
            </div>

                </div>


                <TextWithTitle2 title={"Comisión Disciplinaria"} text={""}/>
                <div className="text-center text-gray-400 underline mx-6">
                    <div>
                        <p className="mb-6">Miembros permanentes</p>
                        <div className="mt-6">
                            <div className="flex justify-center">
                            <FacultyPreview name={leftCard.name} image={leftCard.image}/>
                            </div>
                            <div className="flex justify-center">
                            <FacultyPreview name={leftCard.name} image={leftCard.image}/>
                            </div>
                        </div>
                        
                    </div>
                </div>
                    <div className="text-center text-gray-400 underline mx-6 my-10">
                        <div className="">
                        <p>Miembros suplentes</p>
                        <div className="mt-6">
                            <div className="flex justify-center">
                            <FacultyPreview name={leftCard.name} image={leftCard.image}/>
                            </div>
                            <div className="flex justify-center">
                            <FacultyPreview name={leftCard.name} image={leftCard.image}/>
                            </div>
                        </div>
                        </div>
                    
                </div>
            </Layout>
        </div>
    )
}