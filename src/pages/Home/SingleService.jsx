import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const SingleService = ({services}) => {
    const { id, title, image, short_details, price, details } = services;

    return (
        <div className="card glass mb-16 text-white p-1">
            <figure><img src={image} alt={title}/></figure>
            <div className="card-body">
                <h2 className="card-title text-theme-light">{title}</h2>
                {
                    details.length > 200 
                    ? <p>{short_details.slice(0,200)} <Link to={`/${id}`} className="text-theme-light">Read More...</Link></p>
                    : <p>{short_details}</p>
                }
                <h3>{price}</h3>
                <div className="card-actions justify-start">
                    <Link to={`/${id}`}><button className="btn btn-sm text-white bg-theme-primary border-none hover:text-theme-primary">See More</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleService;

SingleService.propTypes = {
    services: PropTypes.object
}