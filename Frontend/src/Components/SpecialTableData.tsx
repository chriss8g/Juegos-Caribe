import { useEffect, useState } from "react"
import useAdministration from "../hooks/useAdministration"
import useEntityInformation from "../hooks/useEntityInformation"

export default function SpecialTableData({propId, id})
{
    const {
        getPropertyEndpoint,
    } = useEntityInformation()

    const {
        getDataByIdFromEndpoint,
        currentEntityType,
        DataByIdFromEndpoint
    } = useAdministration()
    
    useEffect(()=>{
        getDataByIdFromEndpoint(propId, getPropertyEndpoint(currentEntityType, id))
    },[])

    return(
        <div>
            {DataByIdFromEndpoint?.str}
            <br/>
        </div>
    )
}