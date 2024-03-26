import { use, useEffect, useState } from "react"
import entities from "../../Entities.json"
import useTranslation from "./useTranslation"
import useEntityInformation from "./useEntityInformation"
import axios from 'axios'


export default function useAdministration()
{
    const { getEntityType } = useEntityInformation()
    
    const[Data, setData]= useState<typeof currentEntityType[]>([])

    const [selectedDataId, setSelectedDataId] = useState(0)

    const [currentEntity, setCurrentEntity] = useState<Entity>(entities[0])
    
    const currentEntityType= getEntityType(currentEntity.id)

    const [editMode, setEditMode] = useState(false)

    const API = axios.create({
        baseURL: process.env.API_URL
    })
    
    const getData = async (endpoint: string) =>
    {
        const res = await API.get(endpoint+'/')
        setData(res.data)
        return (await res.data)
    }
        

    function getDataById(dataId: number)
    {
        return Data.filter((x)=>x.id === dataId)[0]        
    }

    const [DataByIdFromEndpoint, setDataByIdFromEndpoint] = useState<typeof currentEntityType>()
    
    function getDataByIdFromEndpoint(dataId: number, endpoint: string)
    {
        fetch(`${process.env.API_URL + endpoint}/`+dataId+'/', {
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

    function addData(newData:any, endpoint:string)
    {
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
        console.log(newData)
        try {
            fetch(`${process.env.API_URL + currentEntity.endpoint}/`+ newData.id+ '/', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newData)
            })
        } catch (error) {
            console.log(error)
        }
      
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
        selectedDataId,
        setCurrentEntity, 
        setData,
        setEditMode,
        setSelectedDataId,
        updateData
    } 
}