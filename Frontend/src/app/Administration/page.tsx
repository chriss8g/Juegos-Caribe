'use client'
import Layout from "../../Components/Layout/Layout"
import React, { useEffect } from "react"
import useAdministration from "../../hooks/useAdministration"
import AdministrationForm from "../../Components/AdministrationForm/AdministrationForm"
import DeleteModal from "../../Components/DeleteModal/DeleteModal"
import useTranslation from "../../hooks/useTranslation"
import { IconPencil, IconTrash } from "@tabler/icons-react"

export default function Administration()
{
    const { 
        currentEntity,
        Data, 
        selectedDataId, 
        setSelectedDataId, 
        isLoading, 
        getEntityPropertiesNames, 
        getDataById,
        getData,
        getDataByIdFromEndpoint,
        entities,
        editMode, 
        setEditMode ,
        setCurrentEntity,

    } = useAdministration()

    const { toSpanish } = useTranslation()


    useEffect(()=>{
        getData()
    },[currentEntity])

    function handleEdit(e){
        setEditMode(true)
        setSelectedDataId(e.target.closest('tr').children[0].innerHTML as number)
        document.getElementById('adminForm').style.display="block"
    }

    function handleCreate(e)
    {
        var form = document.getElementById('adminForm')
        form.style.display="block"
    }

    function handleOnDelete(id: number)
    {
        setSelectedDataId(id)
        var modal = document.getElementById('DeleteModal')
        modal.style.display="block"
    }

    return (
        <div className="Administration">
            <Layout>
                <div className="SectionMenu">

                    <br />
                    Entidades:
                    <select name="Entities" id="Entities" onChange={(e)=>{setCurrentEntity(entities[+e.target.value])}}>
                        {entities.map((ent, key)=>(
                            <option id={`${key}`} value={ent.id}>
                                {toSpanish(ent.name)}
                            </option>
                        ))}
                    </select>
                    <br />
                    <br />

                </div>
                <div id="adminForm" className="hidden">
                    <AdministrationForm editMode={editMode} setEditMode={setEditMode} selected={selectedDataId}/>
                </div>
                <div id="DeleteModal" className="hidden">
                    <DeleteModal data={getDataById(selectedDataId)}/>
                </div>
                {
                    !isLoading ?
                        <div className="CRUDSection">
                            <table className=" border-solid border-2 border-black">
                                <thead className="border-solid border-2 border-black">
                                    <tr>
                                        {
                                            getEntityPropertiesNames(Data[0]).map((prop, id)=>(
                                                <th className="border-solid border-2 border-black p-2" key={id}>{prop}</th>
                                            ))
                                        }   
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Data.map((row, id)=>(
                                            <tr className="border-solid border-2 border-black" key={id}>
                                                {Object.values(row).map((prop, id)=>{
                                                    if(typeof prop === 'object')
                                                    {
                                                        // return <td className="p-2 text-center border-solid border-2 border-black td" key={id}>
                                                        // </td>
                                                    }
                                                    else
                                                    {
                                                        return <td className="p-2 text-center border-solid border-2 border-black td" key={id}>
                                                            {prop}
                                                        </td>
                                                    }
                                                })}
                                                <button className="p-2 border-solid border-2 border-gray-400 w-full bg-orange-300" onClick={(e)=>handleEdit(e)}><IconPencil className="m-auto"/></button>
                                                <button className="p-2 border-solid border-2 border-gray-400 w-full bg-red-400" onClick={()=>handleOnDelete(row.id)}><IconTrash className="m-auto"/></button>
                                            </tr>
                                        ))
                                    }
                                </tbody>

                            </table>
                            <div className="w-96 m-auto">
                                <button className="w-80 border-2 border-slate-600 ml-7 mt-7 py-1 bg-slate-600 text-white rounded-md"
                                    onClick={(e)=>handleCreate(e)}
                                >
                                    Agregar
                                </button>
                            </div>
                        </div>
                    :
                    <h3>Loading data...</h3>
                }
            </Layout>
        </div>
    )
}