const UpcomingEvents = () => {
    return (
        <div className="my-10 bg-slate-900" data-aos="fade-up"data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
            <div className="max-w-6xl mx-auto p-10 text-white">
                
                
                <div className="lg:flex items-center justify-between">
                    <div className="lg:w-1/2 w-full">
                        <h2 className="text-4xl text-theme-light font-extralight mb-6">Upcoming Events</h2>
                        <h1 role="heading" className="md:text-5xl text-3xl font-bold leading-10 mt-3 text-theme-light">Tech & Gaming</h1>
                        <p role="contentinfo" className="text-base leading-5 mt-5 text-slate-200">Stay at the forefront of the dynamic world of Tech & Gaming events with our comprehensive guide. Explore the latest in cutting-edge technology, upcoming gaming releases, and thrilling esports tournaments. Whether you a tech enthusiast or a dedicated gamer, our curated list of events has something for everyone.</p>

                        <p role="contentinfo" className="text-base leading-5 mt-5 text-slate-200">Join us on a journey where innovation meets entertainment. Discover the trends that are shaping the future, connect with like-minded enthusiasts, and immerse yourself in the vibrant Tech & Gaming community. Be part of the excitement!</p>

                        <p role="contentinfo" className="text-base leading-5 mt-5 text-slate-200">Stay updated on upcoming Tech & Gaming events: Explore the latest in technology and gaming trends, conferences, and expos. Join the excitement!</p>
                    </div>
                    <div className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8" role="list">
                        <img src="https://i.ibb.co/0n6DSS3/bgimg.png" className="absolute w-full -ml-12 mt-24" alt="background circle images" />
                        <div role="listitem" className="bg-theme-primary cursor-pointer shadow rounded-lg p-8 relative z-30">
                            <div className="md:flex items-center justify-between">
                                <h2 className="text-2xl font-semibold leading-6 text-slate-200">Tech Expo 2023</h2>
                                <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-slate-200"><span className="font-normal text-base">November 15-17</span></p>
                            </div>
                            <p className="md:w-80 text-base leading-6 mt-4 text-slate-300">Explore AI, IoT, and emerging tech innovations. Immerse yourself in hands-on demos, expert panels, and networking opportunities</p>
                        </div>
                        <div role="listitem" className="bg-theme-primary cursor-pointer shadow rounded-lg mt-3 flex relative z-30">
                            <div className="w-2.5 h-auto bg-theme-light rounded-tl-md rounded-bl-md"></div>
                            <div className="w-full p-8">
                                <div className="md:flex items-center justify-between">
                                    <h2 className="text-2xl font-semibold leading-6 text-slate-200">GamingCon</h2>
                                    <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-slate-200"><span className="font-normal text-base">December 5-7</span></p>
                                </div>
                                <p className="md:w-80 text-base leading-6 mt-4 text-slate-300">The ultimate gaming experience awaits. Exclusive previews of upcoming releases, E-sports tournaments, and meet your favorite game developers</p>
                            </div>
                        </div>
                        <div role="listitem" className="bg-theme-primary cursor-pointer shadow rounded-lg p-8 relative z-30 mt-7">
                            <div className="md:flex items-center justify-between">
                                <h2 className="text-2xl font-semibold leading-6 text-slate-200">E-Sports Championship</h2>
                                <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-slate-200"><span className="font-normal text-base">January 20-22</span></p>
                            </div>
                            <p className="md:w-80 text-base leading-6 mt-4 text-slate-300">Witness intense gaming battles like never before. Top esports teams compete for glory in a high-stakes showdown.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvents;