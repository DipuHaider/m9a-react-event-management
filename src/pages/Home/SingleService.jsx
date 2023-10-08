import { Link } from "react-router-dom";

const SingleService = ({services}) => {
    const {title , image, details, id } = services;

    return (
        <div className="card glass mb-16">
        <figure><img src={image} alt="car!"/></figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            {
                details.length > 200 
                ? <p>{details.slice(0,200)} <Link to={`/service/${id}`} className="text-blue-600">Read More...</Link></p>
                : <p>{details}</p>
            }
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
            </div>
        </div>
        </div>
    );
};

export default SingleService;