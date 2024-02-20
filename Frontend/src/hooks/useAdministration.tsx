import { useEffect, useState } from "react"
import entities from "../../Entities.json"
import useTranslation from "./useTranslation"


export default function useAdministration()
{
    
    const[Data, setData]= useState<typeof currentEntityType[]>([{
        id: 0,
        title: "",
        year: 0,
        edition: ""
    }])

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
        fetch(`${process.env.SERVER_URL + currentEntity.endpoint}`, {
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

    function addData(newDataBody: typeof currentEntityType)
    {
        console.log(newDataBody)
    }

    function updateData(newDataBody: typeof currentEntityType)
    {
        console.log("Nuevo cuerpo: "+newDataBody)
    }

    function deleteData(id: number)
    {    
        try {
            fetch(`${process.env.SERVER_URL + currentEntity.endpoint}/` + id, {
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

        switch (id) {
            case 0:
                return season;
            case 1:
                break;
            default:
                break;
        }
    }


    const { toSpanish } = useTranslation()

    function getEntityPropertiesNames(object: Object) {
        let props = []
        for(const prop in object)
        {
            props.push(
                toSpanish(prop)[0].toUpperCase()+toSpanish(prop).slice(1)
            )
        }
        return props
    }
    
    return { 
        Data, 
        selectedDataId,
        setSelectedDataId,
        editMode,
        setEditMode,
        isLoading, 
        entities, 
        setCurrentEntity, 
        getEntityPropertiesNames, 
        currentEntity, 
        getEntityType, 
        currentEntityType,
        deleteData,
        addData, 
        getDataById,
        updateData
    } 
}