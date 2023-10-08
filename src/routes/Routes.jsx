import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../auth/Login/Login";
import Register from "../auth/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Offers from "../pages/Offers/Offers";
import Profile from "../pages/Profile/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('events.json'),
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/offers',
                element: <PrivateRoutes><Offers></Offers></PrivateRoutes>,
                
            },
            {
                path: '/profile',
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>,
            },
        ]
    }
]);

export default router;