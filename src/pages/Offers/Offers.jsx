import { useLoaderData } from "react-router-dom";
import SingleOffer from "./SingleOffer";

const Offers = () => {

    const offers = useLoaderData();
    console.log(offers)

    return (

        <div className="py-20 bg-purple-200 min-h-fit">  
            <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
                <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-4">
                {
                    offers.map(singleOffer => <SingleOffer key={singleOffer.id} offers={singleOffer}></SingleOffer>)
                }
                </div>
            </div>
        </div>
    );
};

export default Offers;