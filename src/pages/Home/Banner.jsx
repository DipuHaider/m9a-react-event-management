const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/zRqb7fN/banner1.png" className="w-full" />
                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                    <div className="flex h-full items-center mx-96 pb-6">
                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle bg-transparent text-white">❮</a> 
                    <a href="#slide2" className="btn btn-circle bg-transparent text-white">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/Bfd18vS/banner2.jpg" className="w-full" />
                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                    <div className="flex h-full items-center mx-96 pb-6">
                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle bg-transparent text-white">❮</a> 
                    <a href="#slide3" className="btn btn-circle bg-transparent text-white">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/pdrtJyn/banner3.jpg" className="w-full" />
                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                    <div className="flex h-full items-center mx-96 pb-6">
                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle bg-transparent text-white">❮</a> 
                    <a href="#slide4" className="btn btn-circle bg-transparent text-white">❯</a>
                </div>
            </div> 
        </div>
    );
};

export default Banner;