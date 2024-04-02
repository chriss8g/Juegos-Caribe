import { useEffect, useState } from "react"
import useValidation from "../hooks/useValidation"
import axios from "axios"

export default function InputField({id, type, name, entity, formRow, onChange, value, accept, defaultChecked, className})
{
    const [isRequired, setIsRequired] = useState(false)
    const [isText, setIsText] = useState(false)

    const API = axios.create({
        baseURL: process.env.API_URL
    })
    
    useEffect(()=>{
        API.options(entity?.endpoint + "/").then(resp => {
            setIsRequired(resp.data["actions"]["POST"][Object.keys(formRow)[id]]["required"])
        })
        API.options(entity?.endpoint + "/").then(resp => {
            setIsText(resp.data["actions"]["POST"][Object.keys(formRow)[id]]["type"] == "string" && !resp.data["actions"]["POST"][Object.keys(formRow)[id]]["max_length"])
        })

    },[])

    useEffect(()=>{
        console.log(isRequired)
    },[isRequired])

    return(
        <div className="">
            {
                isText ?
                <textarea id={`${id}`} required={isRequired} name={name} className={`${className} shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-center border-solid td`} onChange={(e)=>onChange(e)} defaultValue={value} cols={30} rows={10} />
                :
                <input id={`${id}`} accept={accept} defaultChecked={defaultChecked} required={isRequired} name={name} type={type} className={`${className} shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-center border-solid td`} onChange={(e)=>onChange(e)} defaultValue={value}/>
            }
        </div>
    ) 
    
}