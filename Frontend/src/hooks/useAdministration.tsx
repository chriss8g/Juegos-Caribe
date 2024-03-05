import { useEffect, useState } from "react"
import entities from "../../Entities.json"
import useTranslation from "./useTranslation"


export default function useAdministration()
{
    
    const[Data, setData]= useState<typeof currentEntityType[]>([])

    const [selectedDataId, setSelectedDataId] = useState(0)

    const [currentEntity, setCurrentEntity] = useState<Entity>(entities[0])
    
    const currentEntityType = getEntityType(currentEntity.id)

    const [isLoading, setIsLoading] = useState(true)

    const [editMode, setEditMode] = useState(false)



    useEffect(()=>{
        getData()
        setIsLoading(false)
    },[])
    
    
    function getData()
    {
        fetch(`${process.env.SERVER_URL + currentEntity.endpoint}/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(
            (response)=>response.json()
        )
        .then(
            (data)=>{
                setData(data)
            }
        )
    }

    function getDataById(dataId: number)
    {
        return Data.filter((x)=>x.id === dataId)[0]        
    }

    const [resData, setResData] = useState<typeof currentEntityType>()
    
    function getDataByIdFromEndpoint(dataId: number, endpoint: string)
    {
        console.log(dataId, endpoint)
        fetch(`${process.env.SERVER_URL + endpoint}/`+dataId+'/', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(
            (response)=>response.json()
        )
        .then(
            (data)=>{
                setResData(data)
            }
        )     
        return resData   
    }

    function addData(newData: typeof currentEntityType)
    {
        console.log(newData)
        try{
            // fetch(`${process.env.SERVER_URL + currentEntity.endpoint}/`, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(newData)
            // })
        }
        catch (error) {
            console.log(error)
        }
    }

    function updateData(newData: typeof currentEntityType)
    {
            fetch(`${process.env.SERVER_URL + currentEntity.endpoint}/`+ newData.id+ '/', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newData)
            })
      
    }

    function deleteData(id: number)
    {    
        try {
            fetch(`${process.env.SERVER_URL + currentEntity.endpoint}/` + id + '/', {
                method: 'DELETE',
            })
        } 
        catch (error) {
            console.log(error)                
        }       
    }


    function getEntityType(id:number)
    {
        var season: Season;
        var comisioner: Comisioner;
        var tournament: Tournament;
        var game: Game;
        switch (id) {
            case 0:
                return season;
            case 1:
                return comisioner;
            case 2:
                return tournament;
            case 11:
                return game;
            default:
                break;
        }
    }


    const { toSpanish } = useTranslation()

    function getEntityPropertiesNames(object: Object) {
        let props = []
        for(const prop in object)
        {
            try {
                props.push(
                    toSpanish(prop)[0].toUpperCase()+toSpanish(prop).slice(1)
                )
            } catch (error) {
                console.log(prop)
            }
        }
        return props
    }
    
    return { 
        addData, 
        currentEntityType,
        currentEntity, 
        Data, 
        deleteData,
        editMode,
        entities, 
        getDataById,
        getData,
        getDataByIdFromEndpoint,
        getEntityPropertiesNames, 
        getEntityType, 
        isLoading, 
        selectedDataId,
        setCurrentEntity, 
        setData,
        setEditMode,
        setSelectedDataId,
        updateData
    } 
}