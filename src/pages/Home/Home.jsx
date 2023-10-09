import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import SingleService from "./SingleService";
import UpcomingEvents from "./UpcomingEvents";
import OurPartners from "./OurPartners";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const services = useLoaderData();
    // console.log(services)

    return (
        <div>
            <Helmet>
                <title>Home | Event Management</title>
            </Helmet>
            <Banner></Banner>
            <div className="max-w-6xl mx-auto my-20" data-aos="fade-in"data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-4xl text-theme-light font-extralight mb-6">Services we do</h2>
                </div>
                    
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-2">
                    {
                        services.map(singleService => <SingleService key={singleService.id} services={singleService}></SingleService>)
                    }
                </div>
            </div>
            <UpcomingEvents></UpcomingEvents>
            <OurPartners></OurPartners>
        </div>
    );
};

export default Home;