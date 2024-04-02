export default function MainNews({news}) {
    const backgroundImage = `linear-gradient(to bottom, transparent, rgb(51 51 51 / 89%)), url(${news.images})`;

    return (
        <div className="main-news-container relative w-[100%] mb-2 pt-[27%] pb-[5%]"
             style={{
                 backgroundImage,
                 backgroundSize: 'cover',
                 backgroundPosition: 'top',
                 borderBottomLeftRadius: '14px',
                 borderBottomRightRadius: '14px'
             }}>
            <p className="text-white text-sm font-bold ml-8 mr-8 mt-5">{news.title}</p>
            <p className="text-white text-sm font-medium ml-8 mr-10">por {news.author}</p>
        </div>
    );
}