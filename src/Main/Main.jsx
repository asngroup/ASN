import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";

const Main = () => {


        // Not Show NavBar && Footer login page
        const location = useLocation();
        // console.log(location)
        const noNavBarFooter = location.pathname.includes("login") 


    return (
        <div>
             {noNavBarFooter || <Navbar></Navbar>}

            <Outlet></Outlet>

            {noNavBarFooter || <Footer></Footer>}
            
        </div>
    );
};

export default Main;