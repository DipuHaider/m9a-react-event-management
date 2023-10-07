import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../auth/Login/Login";
import Register from "../auth/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader: () => fetch('events.json'),
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            // {
            //     path: '/orders',
            //     element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
            // },
            // {
            //     path: '/profile',
            //     element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
            // },
        ]
    }
]);

export default router;