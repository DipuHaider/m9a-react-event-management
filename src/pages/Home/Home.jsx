import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import SingleService from "./SingleService";
import UpcomingEvents from "./UpcomingEvents";
import OurPartners from "./OurPartners";

const Home = () => {
    const services = useLoaderData();
    console.log(services)

    return (
        <div>
            <Banner></Banner>
            <div className="max-w-6xl mx-auto my-20">
                <div className="grid grid-cols-3 gap-6">
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