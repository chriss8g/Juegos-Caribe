'use client'
import Image from 'next/image'
import Layout from '../Components/Layout/Layout'
import Presentation from '../Components/Presentation/Presentation'
import MedalTable from '../Components/MedalTable/MedalTable'
import DailySports from '../Components/DailySports/DailySports'
import RelevantNews from '../Components/RelevantNews/RelevantNews'
// import FacultiesPlaying from '../Components/FacultiesPlaying/FacultiesPlaying'
import Pagination from '../Components/Pagination/Pagination'
import FacultyPreview from '../Components/FacultyPreview/FacultyPreview'

export default function Home() {

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
    },
    {
        "name": "FARAL3",
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
    },
    {
        "name": "FLEX4",
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
        "name": "FARAL5",
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
    },
    {
        "name": "FARAL6",
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
    },
    {
        "name": "FARAL7",
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
    },
    {
        "name": "FARAL8",
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
    },
    {
        "name": "FARAL9",
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
    }
]

  return (
    <main className='main'>
        <Layout>
          <Presentation />
          <MedalTable />
          <DailySports />
          <RelevantNews />

          <h2 className="sectionTitle">Facultades Participantes</h2>
          <Pagination itemComponent={FacultyPreview} data={Faculties}/>
        </Layout>
    </main>
  )
}
