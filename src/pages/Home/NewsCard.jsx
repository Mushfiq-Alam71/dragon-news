import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
    const { _id, title, image_url, details } = news;
    return (
        <div className="card bg-base-100 shadow-xl mb-16">
            <figure><img className="w-[518px] h-[262px]" src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>
                    {
                        details.length > 200
                            ? <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-red-500 hover:underline font-semibold">Read More...</Link></p>
                            : <p>{details}</p>
                    }
                </p>

            </div>
        </div >

    );
};

export default NewsCard;