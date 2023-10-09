import PropTypes from 'prop-types';

const SingleOffer = ({offers}) => {

    const {title, image, price, discounted_price, details } = offers;
    return (
        <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
            <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-purple-900">{title}</h3>
                <p className="mb-6">{details}</p>
                <p className="block font-medium text-slate-500 text-base line-through">{price}</p>
                <p className="block font-bold text-purple-600 text-2xl">{discounted_price}</p>
            </div>
            <img src={image} className="w-full ml-auto mb-2 rounded-full" alt={title} loading="lazy" width="900" height="600"/>
        </div>
    );
};

export default SingleOffer;

SingleOffer.propTypes = {
    offers: PropTypes.object
}