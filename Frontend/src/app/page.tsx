'use client'
import Image from 'next/image'
import "../app/globals.css";
import Layout from '../Components/Layout/Layout'
import Presentation from '../Components/Presentation/Presentation'
import MedalTable from '../Components/MedalTable/MedalTable'
import DailySports from '../Components/DailySports/DailySports'
import RelevantNews from '../Components/RelevantNews/RelevantNews'
import Pagination from '../Components/Pagination/Pagination'
import FacultyPreview from '../Components/FacultyPreview/FacultyPreview'
import {useState, useEffect} from "react"
import useAdministration from "../hooks/useAdministration";

export default function Home() {

    const{getData, Data} = useAdministration()
    
    useEffect(()=>{
        getData(`${process.env.API_URL}/faculty/lastSeason`)
    },[])

    const[Faculties, setFaculties] = useState([]);

    useEffect(()=>{
        setFaculties(Data);
    },[Data]);

  return (
    <main className='main'>
        <Layout>
        <Presentation />

        <MedalTable/>
        <DailySports />
        <RelevantNews />

        {
          Faculties.length > 0 && 
          (
          <div className="MobileView container">
              <h2 className="sectionTitle text-2xl font-bold">Facultades Participantes</h2>
              <Pagination percentage={50} itemComponent={FacultyPreview} data={Faculties} mainSec={true}/>

          </div>
          )
        }
          
        </Layout>
    </main>
  )
}
