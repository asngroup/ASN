/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate,useLocation } from "react-router-dom";
import Loading from "../Loading/Loading";
import { AuthContext } from "../Provider/AuthProvider";
 
 
 

 
const PrivetRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname)

    if (loading) {
        return   <Loading></Loading>
          
    }

    if(user){
        return children;
    }
    return ( <Navigate state={location.pathname} to={'/login'}></Navigate>);
};

export default PrivetRoute;