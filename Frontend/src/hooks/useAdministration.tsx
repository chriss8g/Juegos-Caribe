import { useEffect, useState } from "react"
import entities from "../../Entities.json"
import useTranslation from "./useTranslation"
import useEntityInformation from "./useEntityInformation"


export default function useAdministration()
{
    const { getEntityType } = useEntityInformation()
    
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

    const [DataByIdFromEndpoint, setDataByIdFromEndpoint] = useState<typeof currentEntityType>()
    
    function getDataByIdFromEndpoint(dataId: number, endpoint: string)
    {
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
                setDataByIdFromEndpoint(data)
            }
        )  
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


    


    const { toSpanish } = useTranslation()

    function getEntityPropertiesNames(object: Object) {
        let props = []
        for(const prop in object)
        {
            try {
                props.push(
                    toSpanish(prop).charAt(0).toUpperCase()+toSpanish(prop).slice(1)
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
        DataByIdFromEndpoint,
        deleteData,
        editMode,
        entities, 
        getDataById,
        getData,
        getDataByIdFromEndpoint,
        getEntityPropertiesNames,
        isLoading, 
        selectedDataId,
        setCurrentEntity, 
        setData,
        setEditMode,
        setSelectedDataId,
        updateData
    } 
}