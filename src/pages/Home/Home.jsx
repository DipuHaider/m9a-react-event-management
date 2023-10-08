import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import SingleService from "./SingleService";

const Home = () => {
    const services = useLoaderData();
    console.log(services)

    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-3 gap-6">
                <div className="border">
                    {
                        services.map(singleService => <SingleService key={singleService.id} services={singleService}></SingleService>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;