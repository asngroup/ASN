/* eslint-disable react/no-unescaped-entities */

const Home = () => {

    const currentDateTime = new Date().toLocaleString();

    return (
        <div className="mx-auto container">



            <div className="  rounded-3xl mx-4 md:mx-auto max-w-screen-md border-2 bg-[#3F296E]   mt-6">
                <div className="px-8 py-6 md:p-10 lg:h-96 h-60 ">

                    <h1 className="text-4xl md:text-5xl font-bold text-center  text-white mb-6 mt-10">Total Amount </h1>

                    <p className="text-4xl md:text-5xl font-bold text-center  text-white mb-6">$10000</p>

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
                            <th className="">Name</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className=" bg-blue-200 hover:bg-blue-300 rounded-2xl">

                            <td className="text-black font-medium">
                                Rasel
                            </td>
                            <td className="text-black font-medium">
                                1000
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
                                Arif
                            </td>
                            <td className="text-black font-medium">
                                1000
                            </td>
                            <td>
                                <button className="bg-red-600 p-2 rounded-xl text-white font-bold">Unpaid</button>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Home;