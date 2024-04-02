import axios from "axios"
import { useEffect, useState } from "react"

export default function SelectField({children, multiple, id, defaultValue, name, onChange, className, entity, formRow})
{
    const [isRequired, setIsRequired] = useState(false)

    const API = axios.create({
        baseURL: process.env.API_URL
    })
    useEffect(()=>{
        API.options(entity?.endpoint + "/").then(resp => {
            setIsRequired(resp.data["actions"]["POST"][Object.keys(formRow)[id]]["required"])
        })
    },[])

    return(
        <select name={name} required={isRequired} id={`${id}`} multiple={multiple} defaultValue={defaultValue} onChange={onChange} className={className +" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"}>
            {children}
        </select>
    )
}