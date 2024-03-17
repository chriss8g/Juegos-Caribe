import useAdministration from "../../hooks/useAdministration"
import { useRouter } from "next/navigation"
import useEntityInformation from "../../hooks/useEntityInformation"
import SpecialTableData from "../SpecialTableData"
import { useEffect } from "react"

function DeleteModal({data, entityId, endpoint})
{
    const { 
        getPropertyEndpoint,
        ShowProp,
        getEntityType
    } = useEntityInformation()

    const { 
        getEntityPropertiesNames, 
        deleteData, 
        currentEntity,
        Data
    } = useAdministration()

    const dataEntityType = getEntityType(entityId)


    const router = useRouter()

    function getDataType(value: any){
        if(typeof value === "object")
        {
            if(Array.isArray(value))
            {
                return "select"
            }
        }
        else
        {
            return typeof value
        }
    }

    function handleDelete(id: number)
    {
        deleteData(endpoint, id)
        router.push("/Administration")
    }

    return(
        <div className="">

            <div className="bg-gray-300 bg-opacity-75 w-screen h-screen fixed top-0 z-10">
            </div>
            <div className="modal fixed start-[12.5%] top-1/4 w-3/4 p-5 bg-white z-20 rounded-md">
                <h2 className="text-xl">Va a eliminar:</h2>
                <table className="m-auto my-4">
                    <thead className="border-solid border-2 border-black">
                        <tr>
                            {
                                getEntityPropertiesNames(data).map((prop, id)=>(
                                    <th className="border-solid border-2 border-black p-2" key={id}>{prop}</th>
                                ))
                            }   
                        </tr>
                    </thead>

                    <tbody>
                        {
                            data && 
                            <tr className="border-solid border-2 border-black">
                                {Object.values(data as typeof dataEntityType).map((prop, id)=>{
                                    if(getDataType(prop) === "select")
                                    {
                                        return(
                                            <td className="p-2 text-center border-solid border-2 border-black td" key={id}>
                                                {
                                                    prop.map((value, key)=>{
                                                        return <SpecialTableData entityType={dataEntityType} propIndex={value} dataId={id} key={key}/>
                                                    })
                                                }
                                            </td>
                                        )
                                    }
                                    else if(ShowProp(getEntityPropertiesNames(Data[0])[id]))
                                    {
                                        if(getPropertyEndpoint(dataEntityType, id))
                                        {
                                            return(
                                                <td className="p-2 text-center border-solid border-2 border-black td" key={id}>
                                                    <SpecialTableData entityType={dataEntityType} propIndex={prop} dataId={id}/>
                                                </td>
                                            )
                                        }
                                        else
                                        {
                                            return(
                                                <td className="p-2 text-center border-solid border-2 border-black td" key={id}>
                                                    {typeof prop == "boolean" ? (prop === true ? "Sí" : "No") : prop}
                                                </td>
                                            )
                                        }
                                    }
                                })}
                            </tr>
                        }
                    </tbody>
                </table>
                <div className="flex mt-10 justify-between lg:w-1/3 md:justify-end lg:justify-end">
                    <button className="border-solid border-2 p-3 sm:w-1/5 lg:w-1/2 border-gray-800 rounded-lg mx-2" onClick={()=>{document.getElementById('DeleteModal').style.display="none"}}>Cancelar</button>
                    <button className="border-solid border-2 p-3 sm:w-1/5 lg:w-1/2 border-gray-800 rounded-lg mx-2 bg-red-500 text-white" onClick={()=>{handleDelete(data.id); location.reload()}}>Aceptar</button>
                </div>
            </div>

        </div>
    )
}
export default DeleteModal

function useState<T>(): [any, any] {
    throw new Error("Function not implemented.")
}
