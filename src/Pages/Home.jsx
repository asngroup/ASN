/* eslint-disable react/no-unescaped-entities */

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/axiosPublic/axiosPublic";
import { useEffect, useState } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const Home = () => {

    const currentDateTime = new Date().toLocaleString();
    const axiosPublic = useAxiosPublic();

    const [pendingSum, setPendingSum] = useState(0);
    const [approvedSum, setApprovedSum] = useState(0);


    const { data: payments = [] } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/payments`)
            return res.data;

        }

    })

    // console.log(payments)


    useEffect(() => {
        let pendingTotal = 0;
        let approvedTotal = 0;

        payments.forEach(transaction => {
            const amount = parseInt(transaction.amount); // Convert amount to number

            if (transaction.status === 'pending') {
                pendingTotal += amount;
            } else if (transaction.status === 'approved') {
                approvedTotal += amount;
            }
        });

        // Update state with calculated totals
        setPendingSum(pendingTotal);
        setApprovedSum(approvedTotal);
    }, [payments]);

    // const totalAmount = payments.reduce((sum, item) => sum + parseFloat(item.amount), 0);


    // console.log(pendingSum)
    // console.log(approvedSum)


    return (
        <div className="mx-auto container">



            <div className="  rounded-3xl mx-4 md:mx-auto max-w-screen-md border-2 bg-[#3F296E]   mt-6">
                <div className="px-8 py-6 md:p-10 lg:h-full h-full ">

                    <h1 className="text-3xl md:text-5xl font-bold text-center  text-white mb-6 mt-10">Pending Amount </h1>

                    <p className="text-4xl md:text-5xl font-bold text-center  text-white mb-6 flex justify-center items-center"><FaBangladeshiTakaSign className="mr-2"></FaBangladeshiTakaSign>  {pendingSum}</p>
                    {/* <p className="text-4xl md:text-5xl font-bold text-center  text-white mb-6">$ a {approvedSum}</p> */}
                    {/* <p className="text-4xl md:text-5xl font-bold text-center  text-white mb-6">$ t {totalAmount}</p> */}

                </div>
            </div>

            <div className="  rounded-3xl mx-4 md:mx-auto max-w-screen-md border-2 bg-[#3F296E]   mt-6">
                <div className="px-8 py-6 md:p-10 lg:h-full h-full ">

                    <h1 className="text-3xl md:text-5xl font-bold text-center  text-white mb-6 mt-10">Total Amount</h1>

                    {/* <p className="text-4xl md:text-5xl font-bold text-center  text-white mb-6">$ p {pendingSum}</p> */}
                    <p className="text-4xl md:text-5xl font-bold text-center  text-white mb-6 flex justify-center items-center"><FaBangladeshiTakaSign className="mr-2"></FaBangladeshiTakaSign>  {approvedSum}</p>
                    {/* <p className="text-4xl md:text-5xl font-bold text-center  text-white mb-6">$ t {totalAmount}</p> */}

                </div>
            </div>



            <div >
                <h1 className="text-2xl md:text-5xl font-bold text-center  text-black mb-6 mt-6">{currentDateTime}</h1>
            </div>



            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="border border-blue-300 rounded-2xl font-bold  text-xs text-black">
                            <th>Date</th>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>TrId</th>
                            <th className="ml-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {/* row 1 */}
                        {payments.map(payment => <tr key={payment._id} className=" bg-blue-200 hover:bg-blue-300 rounded-2xl">

                            <td className="text-black font-medium">
                                {payment.date}
                            </td>

                            <td className="text-black font-medium">
                                {payment.name}
                            </td>
                            <td className="text-black font-medium">
                                {payment.amount}
                            </td>
                            <td className="text-black font-medium">
                                {payment.trId}
                            </td>
                            <td>
                                {payment?.status === 'pending' ?

                                    <button className="inline-flex items-center   justify-center w-full px-4 py-3 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto hover:bg-indigo-500 bg-red-600 hover:bg-transparent hover:outline hover:text-black cursor-pointer">{payment?.status || "Premium"}</button>
                                    :
                                    <button className="inline-flex items-center   justify-center w-full px-4 py-3 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto hover:bg-indigo-500 bg-green-600 hover:bg-transparent hover:outline hover:text-black cursor-pointer">{payment?.status || "Not Premium"}</button>}
                            </td>
                        </tr>)}
                    </tbody>



                </table>
            </div>

        </div>
    );
};

export default Home;