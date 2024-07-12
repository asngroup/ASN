import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
 

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);





    // handle LogOut Btn
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: "Logout Success!",
                    text: "Logout !",
                    icon: "success"
                });
                NavigationPreloadManager('/')
            })
            .catch(error => console.log(error))

    }

    const navLinks = <>

        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/request'}>Payment Request</NavLink></li>
        <li><NavLink to={'/profile'}>Profile</NavLink></li>

        {user?.role === 'user' && "Dashboard"}
    </>



    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                            {/* Nav Links */}
                            {navLinks}

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">ASN</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {/* Nav Links */}

                        {navLinks}

                    </ul>
                </div>
                <div className="navbar-end">
                    <span className="mr-4">{user?.email}</span>
                    <Link onClick={handleLogOut} to={'/login'} className="block py-3 px-4  font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline">
                        Logout
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;