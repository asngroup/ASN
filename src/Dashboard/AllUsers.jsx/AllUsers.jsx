import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/axiosPublic/axiosPublic";

const AllUsers = () => {

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
        <div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="border border-blue-300 rounded-2xl font-bold  text-xs text-black">
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {users?.map(user => <tr key={user._id} className=" bg-blue-200 hover:bg-blue-300 rounded-2xl">

                            <td className="text-black font-medium">
                                {user.name}
                            </td>

                            <td className="text-black font-medium">
                                {user.email}
                            </td>
                            <td className="text-black font-medium">
                                {user.password}
                            </td>

                            <td>
                                {user?.role === 'user' ?

                                    <button className="inline-flex items-center   justify-center w-full px-4 py-3 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto hover:bg-indigo-500 bg-red-600 hover:bg-transparent hover:outline hover:text-black cursor-pointer">{user?.role || "Premium"}</button>
                                    :
                                    <button className="inline-flex items-center   justify-center w-full px-4 py-3 text-base font-bold leading-6 text-white  border-transparent rounded-full md:w-auto hover:bg-indigo-500 bg-green-600 hover:bg-transparent hover:outline hover:text-black cursor-pointer">{user?.role || "Not Premium"}</button>}
                            </td>
                        </tr>)}
                    </tbody>




                </table>
            </div>


        </div>
    );
};

export default AllUsers;