import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/axiosPublic/axiosPublic";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Profile = () => {

    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);

    const [pendingSum, setPendingSum] = useState(0);
    const [approvedSum, setApprovedSum] = useState(0);




 


    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/${user.email}`)
            return res.data;

        }

    })


    const { data: payments = [] } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/payments/${user.email}`)
            return res.data;

        }

    })

    console.log(payments)


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



      console.log("pending",pendingSum)
      console.log("approved", approvedSum)




    return (
        <div className="mx-auto container">


            <div
                className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
                <div className="rounded-t-lg h-32 overflow-hidden">

                    <img src={"https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"} alt="" className="object-cover object-top w-full" />
                </div>
                <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">


                    <img src={'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'} alt="" className="object-cover object-center h-32" />
                </div>
                <div className="text-center mt-2">
                    <h2 className="font-bold text-xl">{users.name}</h2>
                    <p className="text-black font-semibold text-xl">{users.email}</p>
                </div>

                <div className="p-4 border-t mx-8 mt-2">
                    <button className="w-full  block mx-auto rounded-full bg-red-600 hover:shadow-lg font-semibold text-white px-6 py-2"> Pending Amount : {pendingSum}</button>
                    <button className="w-full  block mx-auto rounded-full bg-green-500 hover:shadow-lg font-semibold text-black px-6 py-2 mt-4">Your Total Amount : {approvedSum}</button>
                </div>
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
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
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



export default Profile;