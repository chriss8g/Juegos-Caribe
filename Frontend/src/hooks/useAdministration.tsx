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

    function addData(newData: typeof currentEntityType)
    {
        try{
            var body = {
                title: newData.title,
                year: newData.year,
                edition: newData.edition
            }
            fetch(`${process.env.SERVER_URL + currentEntity.endpoint}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    function updateData(newData: typeof currentEntityType)
    {
            var body = {
                id: newData.id,
                title: newData.title,
                year: newData.year,
                edition: newData.edition
            }
            fetch(`${process.env.SERVER_URL + currentEntity.endpoint}/`+ newData.id+ '/', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
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
        addData, 
        currentEntityType,
        currentEntity, 
        Data, 
        deleteData,
        editMode,
        entities, 
        getDataById,
        getEntityPropertiesNames, 
        getEntityType, 
        isLoading, 
        selectedDataId,
        setSelectedDataId,
        setEditMode,
        setCurrentEntity, 
        updateData
    } 
}