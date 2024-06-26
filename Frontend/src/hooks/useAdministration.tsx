import { useState } from "react"
import entities from "../../Entities.json"
import useTranslation from "./useTranslation"
import useEntityInformation from "./useEntityInformation"
import axios from 'axios'
import useValidation from "./useValidation"


export default function useAdministration()
{
    const { toSpanish } = useTranslation()

    const { validateData } = useValidation()

    const { getEntityType, ShowProp } = useEntityInformation()
    
    const[Data, setData]= useState<typeof currentEntityType[]>([])

    const [selectedDataId, setSelectedDataId] = useState(0)

    const [currentEntity, setCurrentEntity] = useState<Entity>()
    
    const currentEntityType= getEntityType(currentEntity?.id)

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

    async function addData(newData, endpoint:string)
    {
        if((await validateData(newData, endpoint)) == false) return false
        const formData = new FormData();

        Object.keys(newData).forEach(key => {
            const value = newData[key];
            const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
            
            if(fileInput && value instanceof File)
            {
                const file = fileInput.files[0];
                formData.append(key, file);
            } 
            else if (Array.isArray(value)) {
                // If the value is an array, append each number with the key
                value.forEach((item) => {
                    formData.append(key, item);
                });
            }
            else
                // For regular values, append them directly
                formData.append(key, value);

            
        });
        fetch(`${process.env.API_URL + endpoint}/`,{
            method: 'POST',
            body: formData
        });
        return true
    }

    async function updateData(newData, endpoint:string)
    {
        if((await validateData(newData, endpoint)) == false) return false
        const formData = new FormData();

        Object.keys(newData).forEach(key => {
            const value = newData[key];
            const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
           
            if(fileInput && value instanceof File)
            {
                const file = fileInput.files[0];
                formData.append(key, file);
            } 
            else if (Array.isArray(value)) {
                // If the value is an array, append each number with the key
                value.forEach((item) => {
                    formData.append(key, item);
                });
            }
            else
                // For regular values, append them directly
                formData.append(key, value);
        });
        fetch(`${process.env.API_URL + endpoint}/${newData.id}/`,{
            method: 'PUT',
            body: formData
        });
        return true
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