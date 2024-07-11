
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";

const Request = () => {


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }



    return (
        <div className="mx-auto container ">




            <div className="  mx-auto container    " style={{ boxShadow: 'box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}    >

                <div className="    shadow-2xl bg-base-100   p-10 space-y-6 rounded-xl container mx-auto   border-red-500" style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}  >


                    <div >
                        <h1 className="text-2xl md:text-5xl font-bold text-center  text-black   mt-6">Payment Request</h1>
                    </div>


                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} >

                        {/* Name & Email Default Value */}

                        <div className="lg:flex justify-center">
                            <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">

                                <label className="label">
                                    <span className="label-text font-bold">Your Name</span>
                                </label>
                                <div className="border border-blue-300   focus:dark:border-blue-500">
                                    <input type="text" name="username" id="username" className="input input-bordered lg:w-[600px] w-full    border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" disabled />
                                </div>

                            </div>


                            <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                                <label className="label">
                                    <span className="label-text lg:ml-4 font-bold">Your Email</span>
                                </label>
                                <div className="border border-blue-300   focus:dark:border-blue-500 lg:ml-4">
                                    <input type="text" name="email" id="email" className="input input-bordered  lg:w-[600px] lg:ml-4 w-full    border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" disabled />

                                </div>
                            </div>

                        </div>

                        {/* Amount & TrId */}
                        <div className="lg:flex justify-center">

                            <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                                <label className="label">
                                    <span className="label-text font-bold lg:ml-4">Amount</span>
                                </label>
                                <select className="select select-primary w-full lg:ml-4  lg:w-[600px] *: border-blue-400   focus:dark:border-blue-500 " name="amount" id="amount" {...register("amount", { required: true })}>
                                    <option disabled selected>Amount</option>
                                    <option>1000</option>
                                    <option>2000</option>
                                    <option>3000</option>
                                    <option>Cash</option>

                                </select>
                                {errors.amount && <span className="text-red-600 font-bold">This field is required</span>}
                            </div>


                            <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                                <label className="label">
                                    <span className="label-text lg:ml-4 font-bold">TrId</span>
                                </label>
                                <div  >
                                    <input type="text" name="TrId" id="TrId" placeholder="TrId" className="input input-bordered  lg:w-[600px] lg:ml-4 w-full    border-blue-300   focus:dark:border-blue-500  " {...register("TrId", { required: true })} />

                                </div>
                                {errors.TrId && <span className="text-red-600 font-bold lg:ml-4">This field is required</span>}

                            </div>

                        </div>



                        <button className="btn w-full hover:outline text-[16px] bg-primary hover:bg-transparent text-white hover:text-black mr-3"  >Send Request</button>

                    </form>






                </div >





            </div >




        </div>
    );
};

export default Request;