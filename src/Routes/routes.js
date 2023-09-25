import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home/Home";
import Appoinement from "../pages/Appoinement/Appoinement/Appoinement";

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
                path: '/appointment',
                element: <Appoinement></Appoinement>
            }
        ]
    }
])
export default router;