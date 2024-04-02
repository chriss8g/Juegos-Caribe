export default function RecCommentInfo({last, comment})
{
    return (
        <div className={`recent-comment-info border-b-2 pb-4 ${last ? 'border-none' : 'border-gray-500'}`}>
            <p className="text-gray-700 text-sm font-bold">{comment.user}</p>
            <p className="text-gray-600 text-sm mt-1">{comment.body}</p>
            <div className="flex justify-between w-full items-end">
                <p className="text-sm text-gray-400">{`Publicado el ${comment.date}`}</p>
            </div>
        </div>
    );

}

