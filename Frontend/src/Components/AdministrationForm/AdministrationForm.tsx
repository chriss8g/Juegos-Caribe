import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import useAdministration from "../../hooks/useAdministration"
import useTranslation from "../../hooks/useTranslation"

export default function AdministrationForm({editMode, selected, setEditMode})
{
    const { getEntityPropertiesNames, Data, addData, updateData, currentEntityType } = useAdministration()
    const [selectedData, setSelectedData] = useState(Data.filter(x=> x.id === +selected)[0])
    const propertiesNames = (getEntityPropertiesNames(Data[0]))
    const [dataValues, setDataValues] = useState([])
    const [needsUpdate, setNeedsUpdate] = useState(false)
    const {toEnglish}= useTranslation()
    const router = useRouter()

    useEffect(()=>{
        setSelectedData(Data.filter(x=>x.id === +selected)[0])
    }, [selected])
    
    useEffect(()=>{
        selectedData && 
            setDataValues(Object.values(selectedData))
    }, [selectedData])

    useEffect(()=>{
        dataValues.map((val, id)=>{

            if(propertiesNames[id] !== "Id" && propertiesNames[id] !== "Str")
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
        var formElements = document.forms['AdminModal'].elements
        var temp ={}
        for(const element of document.forms['AdminModal'].elements)
        {
            console.log(toEnglish(element.name))
        }
        
        if(editMode)
        {
            console.log(temp)
            // updateData({...temp})
        }
        else
        {
            // addData({...temp})
        }
        document.getElementById('adminForm').style.display="none"
        // location.reload()
    }

    function getInputType(value: any){
        if(Array.isArray(value))
        {
            return "select"
        }
        else
        {
            return typeof value
        }
    }

    return(
        <div className="">
            <div className="bg-gray-300 bg-opacity-75 w-screen h-screen fixed top-0 z-10">
            </div>
            <div className="fixed start-[12.5%] top-1/4 w-9/12 p-5 bg-white z-20 rounded-md">
                <form action="" id="AdminModal" className="m-auto my-4">
                    <label htmlFor="Id">Id:</label>
                    <input type="text" name="Id" readOnly value={dataValues.filter((val,id)=>propertiesNames[id]=="Id")}/>
                    {dataValues &&
                        dataValues.map((val, id)=>{
                            if(propertiesNames[id] !== "Id" && propertiesNames[id] !== "Str")
                            {
                                return(
                                    <div className="my-2 flex-col" key={id}>
                                        <label htmlFor="">{propertiesNames[id]}: </label>
                                        {
                                            getInputType(val) == "select" 

                                            ?
                                                <select name={`${propertiesNames[id]}`} id={`${id}`}>
                                                    {
                                                        val.map((value, key)=>(
                                                            <option value={value} onChange={()=>{}} key={key}>
                                                                { value.str }
                                                            </option>
                                                        ))
                                                    }
                                                </select>
                                            :
                                                <input key={id} name={`${propertiesNames[id]}`} className="appearance-none border-solid border-2 rounded-md p-2 max-w-full" id={`${id}`} type={getInputType(val)} placeholder={propertiesNames[id]} onChange={(e)=>onChange(e)}/>
                                        }
                                    </div>
                                )
                            }
                        })
                    }
                </form>
                <div className="flex mt-10 justify-between lg:w-1/3 md:justify-end lg:justify-end">
                    <button className="border-solid border-2 p-3 lg:w-1/2 border-gray-800 rounded-lg mx-2" onClick={()=>handleCancel()}>Cancelar</button>
                    <button className="border-solid border-2 p-3 lg:w-1/2 border-gray-800 rounded-lg mx-2 bg-green-500 text-white disabled:bg-gray-500" disabled={!needsUpdate && editMode} onClick={(e)=>handleOnSubmit(e)}>{editMode===true ? "Guardar" : "Crear"}</button>
                </div>
            </div>
        </div>
    )
}