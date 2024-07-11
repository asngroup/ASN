import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/axiosPublic/axiosPublic";

const Profile = () => {
    const axiosPublic = useAxiosPublic();

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users`)
            return res.data;

        }

    })

    console.log(users)

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
                    <h2 className="font-semibold">Sarah Smith</h2>
                    <p className="text-gray-500">sarah@gmail.com</p>
                </div>

                <div className="p-4 border-t mx-8 mt-2">
                    <button className="w-full  block mx-auto rounded-full bg-[#3F296E] hover:shadow-lg font-semibold text-white px-6 py-2">Your Total Amount : 20000</button>
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
                        <tr className=" bg-blue-200 hover:bg-blue-300 rounded-2xl">

                            <td className="text-black font-medium">
                                09/07/2024
                            </td>

                            <td className="text-black font-medium">
                                Rasel
                            </td>
                            <td className="text-black font-medium">
                                1000
                            </td>
                            <td className="text-black font-medium">
                                TrId
                            </td>
                            <td>
                                <button className="bg-green-600 p-2 rounded-xl text-black font-bold">Paid</button>
                            </td>
                        </tr>
                    </tbody>

                    <tbody>
                        {/* row 2 */}
                        <tr className=" bg-blue-200 hover:bg-blue-300 rounded-2xl">

                            <td className="text-black font-medium">
                                09/07/2024
                            </td>

                            <td className="text-black font-medium">
                                Arif
                            </td>
                            <td className="text-black font-medium">
                                1000
                            </td>
                            <td className="text-black font-medium">
                                TrId
                            </td>
                            <td>
                                <button className="bg-red-600 p-2 rounded-xl text-black font-bold">Paid</button>
                            </td>
                        </tr>
                    </tbody>


                </table>
            </div>





        </div>
    );
};



export default Profile;