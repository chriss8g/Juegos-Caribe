'use client'
import Layout from "../../Components/Layout/Layout";
import "../../Components/FacultyPreview/FacultyPreview.css"
import {useState, useEffect} from "react"
import useAdministration from "../../hooks/useAdministration";
import Pagination from '../../Components/Pagination/Pagination'
import "../globals.css"
import CardITB from "../../Components/CardITB/CardITB";
import ComisionerCard from "../../Components/ComisionerCard/comisionerCard";

export default function Commissioner()
{
    const{getData, Data} = useAdministration()
    
    useEffect(()=>{
        getData(`${process.env.API_URL}/commissioner/large`)
    },[])

    const[commissioner, setCommissioner] = useState([]);

    useEffect(()=>{
        setCommissioner(Data);
    },[Data]);


    const [organizativa, setOrganizativa] = useState([]);
    const [disciplinariaP, setDisciplinariaP] = useState([]);
    const [disciplinariaS, setDisciplinariaS] = useState([]);

    useEffect(() => {
        const organizativaList = commissioner.filter(item => item.commissionerCategory === 'Comisión Organizativa').map(item => ({
            name: item.name,
            body: item.posicion,
            image: item.image
        }));

        const disciplinariaPList = commissioner.filter(item => item.commissionerCategory === 'Comisión Disciplinaria Permanente').map(item => ({
            name: item.name,
            body: item.posicion,
            image: item.image
        }));

        const disciplinariaSList = commissioner.filter(item => item.commissionerCategory === 'Comisión Disciplinaria Suplente').map(item => ({
            name: item.name,
            body: item.posicion,
            image: item.image
        }));
        setOrganizativa(organizativaList);
        setDisciplinariaP(disciplinariaPList);
        setDisciplinariaS(disciplinariaSList);
    }, [commissioner]);

    return(

        <div className="Comisioner MobileView">
            <Layout>
            {
                commissioner.length > 0 &&
                <div>
                <h2 className="flex justify-center font-bold text-2xl text-gray-800 mt-6">Comisión</h2>
                <div className="font-text-6">
                    <p className="text-red-950 mt-6 text-center text-lg mb-3">Comisión Organizativa</p>

                    <Pagination itemComponent={CardITB} data={organizativa} percentage={50}/>

                </div>


                <p className="text-red-950 mt-6 text-center text-lg mb-3">Comisión Disciplinaria</p>
                <div className="text-center text-[#616469] mx-6">
                    <div>
                        <p className="mt-1 underline">Miembros permanentes</p>
                        <div className="mt-3 flex justify-center flex-col">
                            {disciplinariaP.map((item, index) => (
                                <div className="flex justify-center" key={index}>
                                    <ComisionerCard name={item.name} image={item.image} posicion={item.body}/>
                                </div>
                            ))}

                        </div>

                    </div>
                </div>
                <div className="text-center text-[#616469] mx-6 my-10">
                    <div className="">
                        <p className="underline">Miembros suplentes</p>
                        <div className="mt-3">
                            {disciplinariaS.map((item, index) => (
                                <div className="flex justify-center" key={index}>
                                    <ComisionerCard name={item.name} image={item.image} posicion={item.body}/>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                </div>
            }
            </Layout>
        </div>
    )
}