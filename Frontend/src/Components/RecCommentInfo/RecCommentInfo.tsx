export default function RecCommentInfo({last})
{
    return (
        <div className={`recent-comment-info border-b-2 pb-4 ${last ? 'border-none' : 'border-gray-500'}`}>
            <p className="text-gray-700 text-sm font-bold">autor</p>
            <p className="text-gray-600 text-sm mt-1">TEXTO DEL COMENTARIO</p>
            <div className="flex justify-between w-full items-end">
                <p className="text-sm text-gray-400">publicado + fecha-de-publicación a las + hora-de-publicación</p>
                <p className="text-red-950 text-sm">Responder</p>
            </div>
        </div>
    );

}

