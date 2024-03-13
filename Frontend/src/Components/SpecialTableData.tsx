import { useEffect, useState } from "react"
import useAdministration from "../hooks/useAdministration"
import useEntityInformation from "../hooks/useEntityInformation"

export default function SpecialTableData({entityType, propIndex, dataId})
{
    const {
        getPropertyEndpoint,
    } = useEntityInformation()

    const {
        getDataByIdFromEndpoint,
        DataByIdFromEndpoint
    } = useAdministration()
    
    useEffect(()=>{
        getDataByIdFromEndpoint(propIndex, getPropertyEndpoint(entityType, dataId))
    },[])

    return(
        <div>
            {DataByIdFromEndpoint?.str}
            <br/>
        </div>
    )
}