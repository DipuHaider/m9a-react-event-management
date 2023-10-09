import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const Profile = () => {

    const {user} = useContext(AuthContext);
    console.log(user)

    return (

        <div className="py-32 bg-purple-200 min-h-fit"> 
            <Helmet>
                <title>Profile | Event Management</title>
            </Helmet>
            <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
                <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-1">
                    <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
                        <img className="w-32 h-32 rounded-full mx-auto" src={user.photoURL} alt="Profile picture"/>
                        <h2 className="text-center text-2xl font-semibold mt-3">{user.displayName}</h2>
                        <p className="text-center text-gray-600 mt-1">{user.email}</p>
                        <div className="flex justify-center mt-5">
                        <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">Twitter</a>
                        <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">LinkedIn</a>
                        <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">GitHub</a>
                        </div>
                        <div className="mt-5">
                        <h3 className="text-xl font-semibold">Bio</h3>
                        <p className="text-gray-600 mt-2">Hello!, My Name is {user.displayName}. Tech enthusiast, coding wizard, and coffee lover ☕. Exploring the digital frontier, one line of code at a time. you can reach me at {user.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Profile;