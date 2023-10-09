import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../auth/Login/Login";
import Register from "../auth/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Offers from "../pages/Offers/Offers";
import Profile from "../pages/Profile/Profile";
import ServiceDetail from "../pages/ServiceDetail/ServiceDetail";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('events.json'),
            },
            {
                path: '/:id',
                element: <PrivateRoutes><ServiceDetail></ServiceDetail></PrivateRoutes>,
                loader: () => fetch(`events.json`),
                
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
                loader: () => fetch(`offers.json`),
                
            },
            {
                path: '/profile',
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>,
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
            },
        ]
    }
]);

export default router;