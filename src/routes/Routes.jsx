import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ReserveTable from "../pages/ReserveTable/ReserveTable";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../layout/Dashboard";
import ReservationRequest from "../pages/ReservationRequest/ReservationRequest";
import AddItem from "../pages/AddItem/AddItem";
import Order from "../pages/Order/Order";
import Cart from "../pages/Cart/Cart";
import About from "../pages/About/About";
import MyReservations from "../pages/MyReservations/MyReservations";
import MyOrders from "../pages/MyOrders/MyOrders";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/reserve",
        element: <ReserveTable />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "reservation-request",
        element: <ReservationRequest />,
      },
      {
        path: "add-item",
        element: <AddItem />,
      },
      {
        path: "myreservations",
        element: (
          <PrivateRoutes>
            <MyReservations />
          </PrivateRoutes>
        ),
      },
      {
        path: "Ordered-item",
        element: (
          <PrivateRoutes>
            <MyOrders />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router