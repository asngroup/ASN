import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/axiosPublic/axiosPublic";
import Swal from "sweetalert2";

const PaymentRequest = () => {




    const axiosPublic = useAxiosPublic();


    const { data: payments = [] } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/payments`)
            return res.data;

        }

    })

    console.log(payments)




    // // approved Make in approved

    const handleMakeAdmin = (user) => {

        console.log(user)

        Swal.fire({
            title: "Are you sure?",
            text: "Are You Sure This User is Approved!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Approved it!"
        }).then((result) => {

            if (result.isConfirmed) {
                axiosPublic.patch(`/users/admin/${user._id}`)
                Swal.fire({
                    title: "Success!",
                    text: "Now This Member is Approved !",
                    icon: "success"
                });
            }
        });
    }





    return (
        <div>


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

                                    <button onClick={() => handleMakeAdmin(payment)} className="inline-flex items-center   justify-center w-full px-4 py-3 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto hover:bg-indigo-500 bg-red-600 hover:bg-transparent hover:outline hover:text-black cursor-pointer">{payment?.status }</button>
                                    :
                                    <button   className="inline-flex items-center   justify-center w-full px-4 py-3 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto hover:bg-indigo-500 bg-green-600 hover:bg-transparent hover:outline hover:text-black cursor-pointer">{payment?.status  }</button>}
                            </td>
                        </tr>)}
                    </tbody>



                </table>
            </div>



        </div>
    );
};

export default PaymentRequest;