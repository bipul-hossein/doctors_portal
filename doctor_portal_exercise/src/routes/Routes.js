
import { createBrowserRouter, Link } from "react-router-dom";
import Home from "../components/Pages/Home/Home/Home";
import Appointment from "../components/Pages/Appointment/Appointment/Appointment";

import Login from "../components/Pages/Login/Login";
import Main from "../layouts/Main";
import SignUp from "../components/Pages/SignUp/SignUp";


 const router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>

            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/appointment',
                element:<Appointment></Appointment>
            }
        ]
    },
    {
        path:'*',
        element:<div>No page found!!<br/> Go to <Link to="/" className="underline text-primary">home page</Link></div>
    }
])

export default router;