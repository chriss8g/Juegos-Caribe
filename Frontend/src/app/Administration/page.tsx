'use client'
import Layout from "../../Components/Layout/Layout"
import React, { useEffect } from "react"
import useAdministration from "../../hooks/useAdministration"
import AdministrationForm from "../../Components/AdministrationForm/AdministrationForm"
import DeleteModal from "../../Components/DeleteModal/DeleteModal"
import useTranslation from "../../hooks/useTranslation"

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
    function getInputType(value: any){
        if(typeof value === "object")
        {
            if(Array.isArray(value))
            {
                return "select"
            }
            else
            {
                return "object"
            }
        }
        else
        {
            return typeof value
        }
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
                        <div className="CRUDSection w-3/4 mx-auto">
                            <table className=" border-solid border-2 border-black">
                                <thead className="border-solid border-2 border-black">
                                    <tr>
                                        {
                                            getEntityPropertiesNames(Data[0]).map((prop, id)=>{
                                                if(prop !== "Str")
                                                {
                                                    return <th className="border-solid border-2 border-black p-2" key={id}>{prop}</th>
                                                }
                                                
                                            })
                                        }
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Data.map((row, id)=>(
                                            <tr className="border-solid border-2 border-black" key={id}>
                                                {Object.values(row).map((prop, id)=>{
                                                    if(getInputType(prop) === "select" 
                                                    )
                                                    {
                                                        return(
                                                            <td className="p-2 text-center border-solid border-2 border-black td" key={id}>
                                                                {
                                                                    prop.map((value)=>(
                                                                        <>
                                                                            {value.str}
                                                                            <br/>
                                                                        </>
                                                                    ))
                                                                }
                                                            </td>
                                                        )
                                                    }
                                                    else if(getEntityPropertiesNames(Data[0])[id] !== "Str")
                                                    {
                                                        if(getInputType(prop) == "object")
                                                        {
                                                            return (
                                                                <td className="p-2 text-center border-solid border-2 border-black td" key={id}>
                                                                    {prop.str}
                                                                </td>
                                                            )
                                                        }
                                                        return( 
                                                        <td className="p-2 text-center border-solid border-2 border-black td" key={id}>
                                                            {prop}
                                                        </td>)
                                                    }
                                                })}
                                                {/* <IconPencil className="m-auto"/> */}
                                                <button className="p-2 border-solid border-2 border-gray-400 w-full bg-orange-300" onClick={(e)=>handleEdit(e)}></button>
                                                <button className="p-2 border-solid border-2 border-gray-400 w-full bg-red-400" onClick={()=>handleOnDelete(row.id)}>Delete</button>
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