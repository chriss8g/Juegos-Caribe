import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import useAdministration from "../../hooks/useAdministration"

export default function AdministrationForm({editMode, selected, setEditMode})
{
    const { getEntityPropertiesNames, Data, addData, updateData, currentEntityType } = useAdministration()
    const [propertiesNames, setPropertiesNames] = useState<string[]>([])
    const [selectedData, setSelectedData] = useState(Data.filter(x=> x.id === +selected)[0])
    const [dataValues, setDataValues] = useState([])
    const [needsUpdate, setNeedsUpdate] = useState(false)
    const router = useRouter()

    useEffect(()=>{
        setSelectedData(Data.filter(x=>x.id === +selected)[0])
        setPropertiesNames(getEntityPropertiesNames(selectedData))
    }, [selected])
    
    useEffect(()=>{
        selectedData && 
            setDataValues(Object.values(selectedData))
    }, [selectedData])

    useEffect(()=>{
        dataValues.map((val, id)=>{
            if(propertiesNames[id] !== "Id")
            {
                if(editMode)
                    (document.getElementById(`${id}`) as HTMLInputElement).value = val
                else
                    (document.getElementById(`${id}`) as HTMLInputElement).value = ""
            }
        })
    },[dataValues, editMode])
    
    function onChange(e)
    {
        var aux = dataValues
        for(const i in Object.values(selectedData))
        {
            if(+i === +e.target.id)
            {
                if(typeof Object.values(selectedData)[i] === 'number')
                {
                    
                    aux[i] = +e.target.value
                }
                else
                {
                    
                    aux[i] = e.target.value
                }
            }
            else
            {
                aux[i] = Object.values(selectedData)[i]
            }
            
            if(Object.values(selectedData)[i] !== aux[i])
            {
                setNeedsUpdate(true)
                setDataValues(aux)
            }
        }
    }

    function handleCancel()
    {
        setEditMode(false)
        document.getElementById('adminForm').style.display="none"
    }

    function handleOnSubmit(e)
    {
        if(editMode)
        {
            // updateData({})
        }
        else
        {
            console.log(document.forms['AdminModal'].form)
        }
        document.getElementById('adminForm').style.display="none"
        router.refresh()
    }

    return(
        <div className="">
            <div className="bg-gray-300 bg-opacity-75 w-screen h-screen fixed top-0 z-10">
            </div>
            <div className="fixed start-[12.5%] top-1/4 w-9/12 p-5 bg-white z-20 rounded-md">
                <form action="" id="AdminModal" className="m-auto my-4">
                    {dataValues &&
                        dataValues.map((val, id)=>{
                            if(propertiesNames[id] !== "Id")
                            {
                                return(
                                    <div className="my-2 flex-col">
                                        <label htmlFor="">{propertiesNames[id]}: </label>
                                        <input key={id} name={`${id}`} className="appearance-none border-solid border-2 rounded-md p-2 max-w-full" id={`${id}`} type={typeof val} placeholder={propertiesNames[id]} onChange={(e)=>onChange(e)}/>
                                    </div>
                                )
                            }
                        })
                    }
                </form>
                <div className="flex mt-10 justify-between lg:w-1/3 md:justify-end lg:justify-end">
                    <button className="border-solid border-2 p-3 lg:w-1/2 border-gray-800 rounded-lg mx-2" onClick={()=>handleCancel()}>Cancelar</button>
                    <button className="border-solid border-2 p-3 lg:w-1/2 border-gray-800 rounded-lg mx-2 bg-green-500 text-white" disabled={!needsUpdate && editMode} onClick={(e)=>handleOnSubmit(e)}>{editMode===true ? "Guardar" : "Crear"}</button>
                </div>
            </div>
        </div>
    )
}