'use client'
import { useState, useEffect } from "react";
import RecCommentInfo from "../RecCommentInfo/RecCommentInfo";
import useAdministration from "../../hooks/useAdministration";
import { useParams } from "next/navigation";
import { Comments } from "../../types/Comment";

export default function RecCommentCard({Id})
{
    const{getDataByIdFromEndpoint, DataByIdFromEndpoint} = useAdministration()


    useEffect(()=>{
        getDataByIdFromEndpoint(+Id, "/comment/news")
    },[])


    const[comments, setComments] = useState([]);

    useEffect(()=>{
        setComments(DataByIdFromEndpoint as unknown as Array<Comments>);
    },[DataByIdFromEndpoint]);

    return (
        comments && comments.length>0 &&
        <div className="RecCommentCard-container bg-white p-3 rounded-2xl shadow-lg border-2 border-white">
            <p className="text-red-950 text-sm font-bold">Comentarios recientes</p>

            {/*Aquí hay que poner que el último elemento del mapping tenga a last como true por un borde*/}
            {comments.map((comment, key)=>(
                <RecCommentInfo last={key === comments.length-1 ? true : false} comment={comment}/>
            ))}
            
    </div>
);

}

