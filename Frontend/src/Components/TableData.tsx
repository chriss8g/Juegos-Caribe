import { useEffect, useState } from "react"
import useAdministration from "../hooks/useAdministration"
import useEntityInformation from "../hooks/useEntityInformation"

export default function TableData({value, id, key})
{
    const {
        getPropertyEndpoint,
    } = useEntityInformation()

    const {
        getDataByIdFromEndpoint,
        currentEntityType
    } = useAdministration()
    
    const [data, setData] = useState<any>()

    useEffect(()=>{
        setData(getDataByIdFromEndpoint(value, getPropertyEndpoint(currentEntityType, id)))
    },[])

    return(
        <div key={key}>
                {data?.str}
            <br/>
        </div>
    )
}