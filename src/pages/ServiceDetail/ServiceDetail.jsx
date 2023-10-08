import { useLoaderData, useParams, useNavigate } from "react-router-dom";

const ServiceDetail = () => {

    const services = useLoaderData();
    
    const {id} = useParams();
    const idInt = parseInt(id);
    const service = services.find(service => service.id === idInt);
    console.log(service);

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div className="max-w-7xl mx-auto relative items-center text-white">
            
            <div className="grid grid-cols-1 space-y-20">
                <div className="flex flex-col mt-32 relative">
                    <img className="rounded-2xl w-1/2" src={service.image} alt={service.title} />
                </div>
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold text-donation-dark">{service.title}</h1>
                    <p className="text-donation-txt70 text-base font-normal leading-7 text-justify">{service.details}</p>
                </div>
                <div>
                    <button onClick={handleGoBack} className="text-theme-light pb-8">Go back</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;