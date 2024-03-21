import { use, useEffect, useState } from "react"
import entities from "../../Entities.json"
import useTranslation from "./useTranslation"
import useEntityInformation from "./useEntityInformation"


export default function useAdministration()
{
    const { getEntityType } = useEntityInformation()
    
    const[Data, setData]= useState<typeof currentEntityType[]>([])

    const [selectedDataId, setSelectedDataId] = useState(0)

    const [currentEntity, setCurrentEntity] = useState<Entity>(entities[0])
    
    const currentEntityType= getEntityType(currentEntity.id)

    const [editMode, setEditMode] = useState(false)

    
    async function getData(endpoint)
    {
        let response = await fetch(`${process.env.API_URL + endpoint}/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        let data = await response.json()
        setData(data)
        return data
    }

    function getDataById(dataId: number)
    {
        return Data.filter((x)=>x.id === dataId)[0]        
    }

    const [DataByIdFromEndpoint, setDataByIdFromEndpoint] = useState<typeof currentEntityType>()
    
    async function getDataByIdFromEndpoint(dataId: number, endpoint: string)
    {
        const response = await fetch(`${process.env.API_URL + endpoint}/`+dataId+'/', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        const data = await response.json()
        setDataByIdFromEndpoint(data)  
        return data
    }

    function addData(newData:any, endpoint:string)
    {
        console.log(JSON.stringify(newData))
        try{
            fetch(`${process.env.API_URL + endpoint}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newData)
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    function updateData(newData: typeof currentEntityType)
    {
        fetch(`${process.env.API_URL + currentEntity.endpoint}/`+ newData.id+ '/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData)
        })
      
    }

    function deleteData(endpoint:string, id: number)
    {    
        try {
            fetch(`${process.env.API_URL + endpoint}/` + id + '/', {
                method: 'DELETE',
            })
        } 
        catch (error) {
            console.log(error)                
        }       
    }

    async function Join(entity1Info, entity2Info, entity1Prop, entity2Prop)
    {
        let resultData = []
        for(var i in entity2Info)
        {
            for(var j in entity1Info)
            {
                if(entity2Info[i][entity2Prop] == entity1Info[j][entity1Prop])
                {
                    resultData.push({ ...entity2Info[i], ...entity1Info[j]})
                }
            }
        }
        console.log(entity1Info)
        return resultData
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
        Join,
        selectedDataId,
        setCurrentEntity, 
        setData,
        setEditMode,
        setSelectedDataId,
        updateData
    } 
}