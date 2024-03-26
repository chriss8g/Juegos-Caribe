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

export default function Administration()
{

    const { 
        currentEntity,
        currentEntityType,
        Data, 
        selectedDataId, 
        setSelectedDataId, 
        getEntityPropertiesNames, 
        getDataById,
        getData,
        entities,
        editMode, 
        setEditMode ,
        setCurrentEntity,

    } = useAdministration()



    const {
        getPropertyEndpoint,
        ShowProp,
        getEntityPostType,
        castTo
    } = useEntityInformation()

    const { toSpanish } = useTranslation()

    const[currentEntityPostType, setCurrentEntityPostType] = useState(getEntityPostType(currentEntity.id))
    
    const [formRow, setFormRow] = useState({})
    
    useEffect(()=>{
        getData(currentEntity.endpoint)
        setCurrentEntityPostType(getEntityPostType(currentEntity.id))
    },[currentEntity])

    const [Loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(false)
    },[Data])



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



    return (
       
        <div className="Administration mb-40 items-center">
            <Layout>
                    <div className="">

                        <div className="SectionMenu mx-auto w-1/3 my-10">

                            Entidades: 
                            <select name="Entities" id="Entities" onChange={(e)=>{setCurrentEntity(entities[+e.target.value]); setLoading(true)}}>
                                {entities.map((ent, key)=>(
                                    <option id={`${key}`} value={ent.id} key={key}>
                                        {toSpanish(ent.name)}
                                    </option>
                                ))}
                            </select>

                        </div>
                {
                    !Loading ?
                    <div className="">
                        <div id="adminForm" className="hidden">
                            <AdministrationForm editMode={editMode} setEditMode={setEditMode} formRow={formRow} entity={editMode ? currentEntityPostType : currentEntity}/>
                        </div>
                        <div id="DeleteModal" className="hidden">
                            <DeleteModal data={deleteRow} entityId={currentEntity.id} endpoint={currentEntity.endpoint}/>
                        </div>
                        <div className="CRUDSection w-3/4 mx-auto">
                            <table className=" border-solid border-2 border-black">
                                <thead className="border-solid border-2 border-black">
                                    <tr>
                                        {
                                            getEntityPropertiesNames(Data[0]).map((prop, id)=>{
                                                if(ShowProp(prop))
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
                                        
                                        Data.map((row, id)=>{
                                            return(
                                            <tr className="border-solid border-2 border-black" key={id}>
                                                {Object.values(row).map((prop, id)=>{
                                                    if(Array.isArray(prop))
                                                    {
                                                        return(
                                                            <td className="p-2 text-center border-solid border-2 border-black td" key={id}>
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
                                                                <td className="p-2 text-center border-solid border-2 border-black td" key={id}>
                                                                    <SpecialTableData entityType={currentEntityType} propIndex={prop} dataId={id}/>
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
                                                <td>
                                                    <button className="p-2 border-solid border-2 border-gray-400 w-full bg-orange-300" onClick={()=>handleEdit(row)}><IconPencil className="m-auto"/></button>
                                                    <button className="p-2 border-solid border-2 border-gray-400 w-full bg-red-400" onClick={()=>handleOnDelete(row)}><IconTrash className="m-auto"/></button>
                                                </td>
                                            </tr>
                                            )
                                        })
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
                    </div>
                    :
                    <h3>Loading...</h3>
                }              
                    </div>
            </Layout>
        </div>
    )
}

