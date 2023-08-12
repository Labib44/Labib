import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form';
import shape from "../../../assets/animation/shape.png";


const Connect = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleContact = data => {
        console.log(data);
    }
    return (
        <div className="bg-[#F4F6FB] p-5">
            <img src={shape} alt="" className='ml-44 lg:ml-44 md:ml-20 sm:ml-10 mt-24 animate-shape' />
            <div className="container mx-auto p-5 px-24 lg:px-0 md:px-0 sm:px-0 -mt-44">
                <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 mt-24">
                    {/* left side */}
                    <div>
                        <div>
                            <h1 className='text-3xl text-primary font-bold'>Let's Connect</h1>
                            <p className='text-[18px] text-accent my-5'>Looking for help? Fill the form and start a new adventure.</p>
                            <hr className='mr-5' />
                        </div>
                        <div className='mt-5'>
                            <h1 className='text-primary text-[18px] font-bold'>Address :</h1>
                            <div className='flex items-center space-x-4 mt-3'>
                                <Icon icon="mdi:home-outline" className='text-3xl text-secondary' />
                                <div className=' text-slate-700 text-[17px]'>
                                    <p className='py-2'>744 New York Ave, Brooklyn, Kings,</p>
                                    <p>New York 10224</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h1 className='text-primary text-[18px] font-bold'>Phone :</h1>
                            <div className='flex items-center space-x-4 mt-3'>
                                <Icon icon="mdi:phone-outline" className='text-3xl text-secondary' />
                                <div className=' text-slate-700 text-[17px]'>
                                    <p className='py-2'>(+642) 245 356 432</p>
                                    <p>(+420) 336 476 328</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h1 className='text-primary text-[18px] font-bold'>Support :</h1>
                            <div className='flex items-center space-x-4 mt-3'>
                                <Icon icon="mdi:email-outline" className='text-3xl text-secondary' />
                                <div className=' text-slate-700 text-[17px]'>
                                    <p className='py-2'>hellosuppot@gmail.com</p>
                                    <p>help@.com</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Right side */}
                    <div className=' rounded-3xl border-l-[5px] border-orange-600 shadow-xl p-10 mt-16 bg-[#F4F6FB] z-50'>
                        <p className='text-accent text-xl font-semibold'>Let's talk</p>
                        <h1 className='text-3xl font-bold text-primary pt-2 pb-3'>Enter your project details</h1>
                        <p className='text-[17px] text-accent'>Content here, content here', making it look like readable English. Many desktop publishing packages.</p>
                        {/* Form */}
                        <div className='mt-10'>
                            <form onSubmit={handleSubmit(handleContact)}>

                                {errors.name && <p className='text-primary bg-[#FFF3CD] p-5 rounded-md mb-3 text-xl' role="alert">{errors.name?.message}</p>}
                                {/* {errors.email && <p className='text-primary bg-[#FFF3CD] p-5 rounded-md mb-3 text-xl' role="alert">{errors.email?.message}</p>} */}

                                <div className='flex lg:flex md:flex sm:flex-wrap gap-3'>
                                    <input type="text" {...register("name", { required: "*Please enter a Name*" })} placeholder='Your Name' className='border-b-2 border-gray-400 focus:border-secondary outline-none bg-[#F4F6FB] w-full py-2 px-5' />
                                    <input type="email" {...register("email", { required: "Email Address is required" })} placeholder='Your Email' className='border-b-2 border-gray-400 focus:border-secondary outline-none bg-[#F4F6FB] w-full py-2 px-5' />
                                </div>
                                <input type="text" {...register("subject", { required: "Subject is required" })} placeholder='Your Subject...' className='w-full border-b-2 border-gray-400 focus:border-secondary outline-none bg-[#F4F6FB] py-2 px-5 mt-10' />

                                <textarea name="" id="" placeholder='Your Message' {...register("message", { required: "Message is required" })} className='bg-[#F4F6FB] border-b-2 border-gray-400 focus:border-secondary outline-none resize-none w-full h-24 mt-5 p-5'></textarea>

                                <button className="btn w-full text-white bg-secondary hover:bg-secondary mt-10">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Connect;