import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import useAdministration from "../../hooks/useAdministration"
import useTranslation from "../../hooks/useTranslation"
import useEntityInformation from "../../hooks/useEntityInformation"

export default function AdministrationForm({editMode, formRow, setEditMode, entity})
{
    const {
        getEntityPropertiesNames, 
        getData,
        addData,
        updateData,
        Data
    } = useAdministration()

    const { 
        ShowProp,
        getPropertyEndpoint
    } = useEntityInformation()

    const [selectedData, setSelectedData] = useState(formRow)
    const propertiesNames = (getEntityPropertiesNames(formRow))
    const [dataValues, setDataValues] = useState([])
    const [loadingModal, setLoadingModal] = useState(false)
    const [needsUpdate, setNeedsUpdate] = useState(false)
    const {toEnglish}= useTranslation()
    const[selectsInfo, setSelectsInfo] = useState([])
    const router = useRouter()


    useEffect(()=>{
        setSelectedData(formRow)
        setLoadingModal(true)
    }, [formRow])
    

    useEffect(()=>{
        if(selectedData)
        {
            setDataValues(Object.values(selectedData))
            let info = []
            Object.values(selectedData).map((val,i)=>{
                if(getPropertyEndpoint(formRow, i))
                {
                    getData(getPropertyEndpoint(formRow, i)).then((data)=>info.push(data))
                }
            })
            setSelectsInfo(info)
        }
    }, [selectedData])


    useEffect(()=>{
        setLoadingModal(false)
    },[dataValues])

    useEffect(()=>{
        dataValues.map((val, id)=>{

            if(propertiesNames[id] !== "Id" && ShowProp(propertiesNames[id]))
            {
                if(editMode)
                    (document.getElementById(`${id}`) as HTMLInputElement).value = val
                else
                    (document.getElementById(`${id}`) as HTMLInputElement).value = ""
            }
        })
    },[dataValues, editMode])

    const[newData, setNewData] = useState([])

    useEffect(()=>{
        setNewData(selectedData)
    }, [selectedData])

    function equalsArrays(arr1, arr2): boolean
    {
        for (let i = 0; i < arr1.length; i++) {
            let found = false
            for (let j = 0; j < arr2.length; j++) {
                if(arr1[i] == arr2[i])
                {
                    found = true
                    break;
                }
            }
            if(!found)
                return false
        }
        return true
    }

    function handleChange(e)
    {
        setNewData(Object.values(newData).map((val, i)=>{
            if(+i === +e.target.id)
            {
                if(Array.isArray(Object.values(formRow)[i])){
                    return Array.from(e.target.selectedOptions, (option:HTMLInputElement) => +option.value)
                }
                else if(typeof Object.values(newData)[i] === 'number')
                    return +e.target.value
                else if(Object.keys(newData)[i] === "picture" || Object.keys(newData)[i] === "file")
                {
                    console.log(e.target.files[0])
                    return null
                }
                else
                    return e.target.value
            }
            else
                return Object.values(newData)[i]
        }))
    }

    useEffect(()=>{
        let updated = false
        for (let i = 0; i < Object.values(formRow).length; i++) {
            if(Array.isArray(Object.values(formRow)[i]))
            {
                if(!equalsArrays(Object.values(formRow)[i], Object.values(newData)[i]))
                    updated = true
            }
            else if(Object.values(formRow)[i] !== Object.values(newData)[i])
            {
                updated = true
            }
        }
        setNeedsUpdate(updated)
    },[newData])

    function closeModal()
    {
        setSelectedData(null)
        document.getElementById('adminForm').style.display="none"
        location.reload()
    }

    function handleCancel()
    {
        setEditMode(false)
        closeModal()
    }

    function handleOnSubmit(e)
    {
        var temp = {}
        var formElements = document.forms['AdminModal'].elements
        for(const element of formElements)
        {
            if(element.type === "number")
                temp[toEnglish(element.name)] = +element.value
            else if(element.type === "select-one")
                temp[toEnglish(element.name)] = [+element.value]
            else if(element.type === "select-multiple")
                temp[toEnglish(element.name)] = [...temp[toEnglish(element.name)],element.value]
            else
                temp[toEnglish(element.name)] = element.value
        }
        
        if(editMode)
        {
            updateData(temp as typeof formRow, entity.endpoint)
        }
        else
        {
            addData(temp, entity?.endpoint)
        }
        closeModal()

    }


    let selectIndex = -1
    return(

        <div className="">
            <div className="bg-gray-300 bg-opacity-75 w-screen h-screen fixed top-0 z-10">
            </div>
            <div className="fixed start-[12.5%] top-1/4 w-9/12 p-5 bg-white z-20 rounded-md">
                <form action="" id="AdminModal" className="m-auto my-4">
                    {
                        editMode &&
                        <div className="">
                            <label htmlFor="Id">Id:</label>
                            <input type="text" name="Id" readOnly value={dataValues.filter((val,id)=>propertiesNames[id]=="Id")}/>
                        </div>
                    }

                    {!loadingModal &&
                        dataValues.map((val, id) =>{
                            if(propertiesNames[id] !== "Id" && ShowProp(propertiesNames[id]))
                            {
                                if(ShowProp(getEntityPropertiesNames(selectedData)[id]))
                                {
                                    // If the property is a foreign key, then, it will be a select input
                                    if(getPropertyEndpoint(formRow, id))
                                    {
                                        selectIndex++
                                        return(
                                                <div className="my-5" key={id}>
                                                    <label>{propertiesNames[id]}: </label>
                                                    <select id={`${id}`} name={`${propertiesNames[id]}`} onChange={(e)=>handleChange(e)}>
                                                        {
                                                            selectsInfo[selectIndex]?.map((val, id)=>{
                                                                return(
                                                                    <option value={`${val.id}`} key={id}>
                                                                        {val.str}
                                                                    </option>
                                                                )
                                                            },
                                                            )
                                                        }
                                                    </select>
                                                </div>
                                        )
                                    }
                                    // If the property is a file, then it will be a file input
                                    else if(propertiesNames[id] === "Foto" || propertiesNames[id] === "Archivo"){
                                        return(
                                            <div className="my-5">
                                                <label>{propertiesNames[id]}: </label>
                                                <input type="file" key={id} id={`${id}`} name={`${propertiesNames[id]}`} onChange={(e)=>handleChange(e)}/>
                                            </div>
                                        )
                                    }
                                    else 
                                    {
                                        //Property is ordinary text(number)
                                        return(
                                            <div className="my-5" key={id}>
                                                <label>{propertiesNames[id]}: </label>
                                                <input id={`${id}`} name={`${propertiesNames[id]}`} type={`${typeof val}`} className="p-2 text-center border-solid border-2 border-black td" onChange={(e)=>handleChange(e)} defaultValue={typeof val == "boolean" ? (val === true ? "Sí" : "No") : val}/>
                                            </div>
                                        )
                                    }
                                }
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