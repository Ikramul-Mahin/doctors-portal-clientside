import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home/Home";
import Appoinement from "../pages/Appoinement/Appoinement/Appoinement";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/appointment',
                element: <Appoinement></Appoinement>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    }
])
export default router;