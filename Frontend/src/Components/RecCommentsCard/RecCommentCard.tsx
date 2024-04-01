import RecCommentInfo from "../RecCommentInfo/RecCommentInfo";

export default function RecCommentCard()
{
    return (
        <div className="RecCommentCard-container bg-white p-3 rounded-2xl shadow-lg border-2 border-white">
            <p className="text-red-950 text-sm font-bold">Comentarios recientes</p>

            {/*Aquí hay que poner que el último elemento del mapping tenga a last como true por un borde*/}
            <RecCommentInfo last={false}/>
            <RecCommentInfo last={false}/>
            <RecCommentInfo last={true}/>

    </div>
);

}

