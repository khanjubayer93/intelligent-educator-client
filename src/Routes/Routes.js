import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import TuitionDetails from "../Pages/TuitionDetails/TuitionDetails";
import PrivateRouts from "./PrivateRouts";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/details/:id',
                element: <PrivateRouts><TuitionDetails></TuitionDetails></PrivateRouts>,
                loader: ({ params }) => fetch(`https://intelligent-educator-server.vercel.app/subjects/${params.id}`)
            },
        ]
    }

]);

export default router;