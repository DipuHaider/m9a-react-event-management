import NavBar from "../Shared/NavBar/NavBar";
import Slider from "../Shared/Slider/Slider";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const news = useLoaderData();
    console.log(news)

    return (
        <div>
            <NavBar></NavBar>
            <Slider></Slider>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 border">
                    {/* {
                        news.map(singleNews => <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
                    } */}
                </div>
            </div>
        </div>
    );
};

export default Home;