import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ReserveTable from "../pages/ReserveTable/ReserveTable";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children:[
            {
                path: '/',
                element:<Home/>
            },
            {
                path: '/reserve',
                element:<ReserveTable/>
            },
            {
                path: '/login',
                element:<Login/>
            },
            {
                path: '/register',
                element:<Register/>
            },
        ]
    }
])

export default router