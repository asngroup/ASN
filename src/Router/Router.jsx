import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Request from "../Request/Request";
import Login from "../Login/Login";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:  <Home></Home>
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            },
            {
                path: "/request",
                element: <Request></Request>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
]);