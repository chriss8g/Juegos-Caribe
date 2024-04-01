'use client'
import Layout from "../../Components/Layout/Layout"
import React, { useEffect, useState } from "react"
import useAdministration from "../../hooks/useAdministration"
import AdministrationForm from "../../Components/AdministrationForm/AdministrationForm"
import DeleteModal from "../../Components/DeleteModal/DeleteModal"
import useTranslation from "../../hooks/useTranslation"
import useEntityInformation from "../../hooks/useEntityInformation"
import { IconPencil, IconTrash } from "@tabler/icons-react"
import SpecialTableData from "../../Components/SpecialTableData"
import {setCookie, getCookie} from "cookies-next"

export default function Administration()
{
    const { 
        currentEntity,
        currentEntityType,
        Data, 
        selectedDataId, 
        setSelectedDataId, 
        getEntityPropertiesNames, 
        deleteData,
        getData,
        entities,
        editMode, 
        setEditMode ,
        setCurrentEntity,

    } = useAdministration()

    const {
        getPropertyEndpoint,
        getEntityIdOnList,
        ShowProp,
        getEntityPostType,
        castTo
    } = useEntityInformation()

    const { toSpanish } = useTranslation()

    const[currentEntityPostType, setCurrentEntityPostType] = useState(getEntityPostType(currentEntity?.id))
    
    const [formRow, setFormRow] = useState({})
    
    useEffect(()=>{
        if(currentEntity)
        {
            getData(currentEntity?.endpoint)
            setCurrentEntityPostType(getEntityPostType(currentEntity?.id))
        }
    },[currentEntity])

    const [Loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(false)
    },[Data])

    useEffect(()=>{
        if(!currentEntity) setCurrentEntity(entities[0])
    },[])


    function handleEdit(row){
        setEditMode(true)
        setFormRow(castTo(currentEntityPostType, row))
        document.getElementById('adminForm').style.display="block"
    }

    function handleCreate(e)
    {
        setFormRow(currentEntityPostType)
        var form = document.getElementById('adminForm')
        form.style.display="block"
    }

    const [deleteRow, setDeleteRow] = useState()
    function handleOnDelete(row)
    {
        setDeleteRow(row)
        var modal = document.getElementById('DeleteModal')
        modal.style.display="block"
    }

    const[selectedToDelete, setSelectedToDelete] = useState([])
    function handleSelect(e, all: boolean){
        if(all)
        {
            let checkBoxesList = Array.from(document.getElementsByClassName("checkbox"), (option:HTMLInputElement) => option as HTMLInputElement)
            if(e.target.checked)
            {
                let selectedIndexes = (e.target.id).split(',').map(x=>+x)
                setSelectedToDelete(selectedIndexes)
                checkBoxesList.map(check=>check.checked = true)
                return
            }
            else
            {
                setSelectedToDelete([])
                checkBoxesList.map(check=>check.checked = false)
                return
            } 
        }
        if(e.target.checked)
            setSelectedToDelete([...selectedToDelete, +e.target.id])
        else
            setSelectedToDelete(selectedToDelete.filter(x=>x !== +e.target.id))
    }

    function DeleteSelection(){
        if(confirm("Desea borrar los objetos seleccionados?"))
            selectedToDelete.map(selected=>{
                var deleteId = Data.filter((x, i)=>+i === +selected)[0].id
                    deleteData(currentEntity?.endpoint, deleteId)
                    location.reload()
            })
    }


    function handleEntityChange(e)
    {
        setCurrentEntity(entities[getEntityIdOnList(e.target.value)]); 
        setCookie("currentEntityName", `${e.target.value}`)
        setLoading(true)
    }

    useEffect(()=>{
        if(getCookie("currentEntityName"))
        {
            setCurrentEntity(entities[getEntityIdOnList(getCookie("currentEntityName"))])
            setLoading(true)
        }
    },[getCookie("currentEntityName")])

    return (
       
        <div className="Administration mb-40 items-center">
            <Layout>
                

                    <div className="">
                    <div className="SectionMenu my-10 w-1/5 mx-auto flex align-middle items-center justify-evenly">

                        <p>
                            Entidades:
                        </p>
                        <select className="w-3/4" name="Entities" id="Entities" onChange={(e)=>handleEntityChange(e)}>
                            {entities.sort((a,b)=>toSpanish(a.name).localeCompare(toSpanish(b.name))).map((ent, key)=>(
                                <option id={`${key}`} value={ent.name} key={key} selected={currentEntity?.id == ent.id}>
                                    {toSpanish(ent.name).charAt(0).toUpperCase()+toSpanish(ent.name).slice(1)}
                                </option>
                            ))}
                        </select>

                    </div>

                    {                
                    !Loading ?
                        <div className="">
                            <div id="adminForm" className="hidden">
                                <AdministrationForm editMode={editMode} setEditMode={setEditMode} formRow={formRow} entity={currentEntity}/>
                            </div>
                            <div id="DeleteModal" className="hidden">
                                <DeleteModal data={deleteRow} entityId={currentEntity?.id} endpoint={currentEntity?.endpoint}/>
                            </div>


                            <div className="CRUDSection w-3/4 mx-auto items-center flex flex-col">
                                {
                                    Data.length > 0 ?
                                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                            <table className="w-full text-md text-left rtl:text-right text-black">
                                                <thead className=" text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                    <tr>
                                                        <th scope="col" className="p-4">
                                                            <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" name="select_all" id={`${Data.map((row, i)=>i)}`} onChange={(e)=>handleSelect(e, true)}/>
                                                        </th>
                                                        {
                                                            getEntityPropertiesNames(Data[0]).map((prop, id)=>{
                                                                if(ShowProp(prop))
                                                                {
                                                                    return <th scope="col" className=" p-2" key={id}>{prop}</th>
                                                                }
                                                                
                                                            })
                                                        }
                                                        <th scope="col" className="p-4">Acciones</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {
                                                        Data.map((row, id)=>{
                                                            return(
                                                            <tr className="" key={id}>
                                                                <td className="w-4 p-4">
                                                                    <div className="flex items-center">
                                                                        <input type="checkbox" name="" id={`${id}`} onChange={(e)=>handleSelect(e, false)} className=" checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                                        <label  className="sr-only">checkbox</label>
                                                                    </div>
                                                                </td>
                                                                {Object.values(row).map((prop, id)=>{
                                                                    if(Array.isArray(prop))
                                                                    {
                                                                        return(
                                                                            <td className="px-6 py-4 text-center  td" key={id}>
                                                                                {
                                                                                    
                                                                                    prop.map((value, key)=>{
                                                                                        return <SpecialTableData entityType={currentEntityType} propIndex={value} dataId={id} key={key}/>
                                                                                    })
                                                                                }
                                                                            </td>
                                                                        )
                                                                    }
                                                                    else if(ShowProp(getEntityPropertiesNames(Data[0])[id]))
                                                                    {
                                                                        if(getPropertyEndpoint(currentEntityType, id))
                                                                        {
                                                                            return(
                                                                                <td className=" px-6 py-4 text-center  td" key={id}>
                                                                                    <SpecialTableData entityType={currentEntityType} propIndex={prop} dataId={id}/>
                                                                                </td>
                                                                            )
                                                                        }
                                                                        else
                                                                        {
                                                                            return(
                                                                                <td className=" px-6 py-4 text-center  td" key={id}>
                                                                                    {typeof prop == "boolean" ? (prop === true ? "Sí" : "No") : (prop.length > 60 ? prop.slice(0,60)+"..." : prop)}
                                                                                </td>
                                                                            )
                                                                        }
                                                                    }
                                                                })}
                                                                <td className="flex items-center px-6 py-4 justify-evenly">
                                                                    {
                                                                        currentEntity?.id !== 4 &&
                                                                            <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={()=>handleEdit(row)}><IconPencil className="m-auto"/></button>
                                                                    }
                                                                    <button className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3" onClick={()=>handleOnDelete(row)}><IconTrash className="m-auto"/></button>
                                                                </td>
                                                            </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>

                                            </table>
                                        </div>

                                        :
                                        <h2>
                                            No hay datos aun...
                                        </h2>
                                }
                                <div className="w-96 m-auto mt-14">
                                    {
                                        currentEntity?.id !== 4 &&
                                        <button className="w-80 border-2 border-slate-600 ml-7 mt-7 py-1 bg-slate-600 text-white rounded-md"
                                            onClick={(e)=>handleCreate(e)}
                                        >
                                            Agregar
                                        </button>
                                    }
                                    {
                                        selectedToDelete.length > 0 &&
                                        <button className="w-80 border-2 border-slate-600 ml-7 mt-7 py-1 bg-red-500 text-white rounded-md"
                                            onClick={()=>DeleteSelection()}
                                        >
                                            Borrar seleccion
                                        </button>
                                    }
                                </div>
                            </div>
                        </div>
                        :
                        <h3>Loading...</h3>
                    }              
                    </div>
            </Layout>
        </div>
    )
}

