import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ReserveTable from "../pages/ReserveTable/ReserveTable";

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
            }
        ]
    }
])

export default router