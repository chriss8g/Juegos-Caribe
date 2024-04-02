import { useEffect } from "react"
import useAdministration from "../hooks/useAdministration"
import useEntityInformation from "../hooks/useEntityInformation"

export default function SpecialTableData({entityType, propIndex, dataId})
{
    const {
        getPropertyEndpoint
    } = useEntityInformation()

    const {
        getDataByIdFromEndpoint,
        DataByIdFromEndpoint,
        currentEntity
    } = useAdministration()
    
    useEffect(()=>{
        if(propIndex !== null)
            getDataByIdFromEndpoint(propIndex, getPropertyEndpoint(entityType, dataId))
    },[])

    return(
        <div>
            {DataByIdFromEndpoint?.str}
            <br/>
        </div>
    )
}