const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/zRqb7fN/banner1.png" className="w-full" />
                <div className="bg-black bg-opacity-50 absolute w-full h-full p-6">
                    <div className="flex flex-col h-1/2 items-center mx-96 pb-6 space-y-10 justify-center">
                        <h3 className="text-7xl lg:text-7xl font-semibold leading-5 lg:leading-6 text-white">Event Management</h3>
                        <p className="text-4xl lg:text-5xl font-semibold leading-5 lg:leading-6 text-white">Tech & Gaming Events</p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle bg-transparent text-white">❮</a> 
                    <a href="#slide2" className="btn btn-circle bg-transparent text-white">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/Bfd18vS/banner2.jpg" className="w-full" />
                <div className="bg-black bg-opacity-50 absolute w-full h-full p-6">
                    <div className="flex flex-col h-full items-center mx-96 pb-6 space-y-10 justify-center">
                        <h3 className="text-7xl lg:text-7xl font-semibold leading-5 lg:leading-6 text-white">Tech Conventions</h3>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle bg-transparent text-white">❮</a> 
                    <a href="#slide3" className="btn btn-circle bg-transparent text-white">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/pdrtJyn/banner3.jpg" className="w-full" />
                <div className="bg-black bg-opacity-50 absolute w-full h-full p-6">
                    <div className="flex flex-col h-full items-center mx-96 pb-6 space-y-10 justify-center">
                        <h3 className="text-7xl lg:text-7xl font-semibold leading-5 lg:leading-6 text-white">Gaming Events</h3>
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