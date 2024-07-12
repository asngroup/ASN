import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {

    const [open, setOpen] = useState(false);

    const isAdmin = true;
    // const isAdmin = false;

    return (
        <div  className="lg:flex ">

            <div>
                <div className=" md:hidden bg-slate-700   p-6" onClick={() => setOpen(!open)}>
                    <div>
                        {
                            open === true ? <MdClose className="text-2xl" /> : <IoMenu className="text-2xl " />
                        }
                    </div>



                </div>
            </div>


            <div>
                <ul className={`md:flex absolute md:static p-2   md:ml-0 w-64 lg:h-full h-[900px]  duration-1000 bg-slate-700  rounded-lg md:rounded-none ${open === true ? '-left-1' : '-left-[600px]'} z-50`}>
                    <ul className="menu ">
                        <Link to={'/'}>
                            <button>

                                <h1 className='text-5xl text-rose-500 flex mt-5'>ASN</h1>

                            </button>
                        </Link>
                        {
                            isAdmin ?



                                <>
                                    <div className="divide-y  ">

                                        <div>

                                            <li>
                                                <Link to={'/dashboard/reg'}>
                                                    <div className="flex mt-4  hover:bg-indigo-600  p-2 hover:rounded-3xl">
                                                        <span className="text-[16px] font-bold text-white ml-2">Registration</span>
                                                    </div>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to={'/dashboard/paymentRequest'}>
                                                    <div className="flex mt-4 hover:bg-indigo-600  p-2 rounded-3xl">
                                                        <span className="text-[16px] font-bold text-white ml-2">Payment Request</span>
                                                    </div>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to={'/dashboard/users'}>
                                                    <div className="flex mt-4 hover:bg-indigo-600  p-2 rounded-3xl">
                                                        <span className="text-[16px] font-bold text-white ml-2">All User</span>
                                                    </div>
                                                </Link>
                                            </li>


                                        </div>


                                    </div>


                                </>

                                :


                                <>



                                    <li>
                                        <Link to={'/dashboard/MyContactRequest'}>
                                            <div className="flex mt-4 hover:bg-indigo-600  p-2 rounded-3xl">
                                                <span className="text-[16px] font-bold text-white ml-2">My Contact Request</span>
                                            </div>
                                        </Link>
                                    </li>




                                </>
                        }



                    </ul>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;