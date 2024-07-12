import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Request from "../Request/Request";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import Reg from "../Reg/Reg";
import PrivetRoute from "./PrivetRoute";
import AllUsers from "../Dashboard/AllUsers.jsx/AllUsers";
import PaymentRequest from "../Dashboard/PaymentRequest/PaymentRequest";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <PrivetRoute><Home></Home></PrivetRoute>
            },
            {
                path: "/profile",
                element: <PrivetRoute><Profile></Profile></PrivetRoute>
            },
            {
                path: "/request",
                element: <PrivetRoute><Request></Request></PrivetRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },




    // Dashboard
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'reg',
                element: <Reg></Reg>
            },
            {
                path: 'users',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'paymentRequest',
                element: <PaymentRequest></PaymentRequest>
            }
        ]
    }
]);