/* eslint-disable react/prop-types */
import { Icon } from '@iconify/react';

const PricingCard = ({ icon, title, amount, btnBg ,time}) => {
    return (
        <div className=' '>
            <div className='mixedBorder border-[3px] rounded-tr-[30px] rounded-bl-[30px] p-5 py-5 hover:bg-[#1C2F50] hover:text-white duration-500'>
                <div className='flex'>
                    <Icon icon={icon} className=" text-secondary text-4xl" />
                    <h1 className='text-xl font-bold ml-2 mt-1 '>{title}</h1>
                </div>
                <div className='flex mt-3 '>
                    <p className='text-2xl font-semibold'>$ </p>
                    <p className='text-4xl font-bold'>{amount} <span className='text-xl font-semibold'>/{time}</span></p>

                </div>
            </div>
            <div className='border-[3px] border-t-0 rounded-bl-[30px] p-5'>
                <div className='flex gap-2 pt-5 '>
                    <Icon icon="mdi:check" className='text-2xl text-secondary' />
                    <p className='text-xl text-accent'>2 App and project</p>
                </div>
                <div className='flex gap-2 pt-5 '>
                    <Icon icon="mdi:check" className='text-2xl text-secondary' />
                    <p className='text-xl text-accent'>400 Gb/s storange</p>
                </div>
                <div className='flex gap-2 pt-5 '>
                    <Icon icon="mdi:check" className='text-2xl text-secondary' />
                    <p className='text-xl text-accent'>Free coustom domain</p>
                </div>
                <div className='flex gap-2 pt-5 '>
                    <Icon icon="mdi:check" className='text-2xl text-secondary' />
                    <p className='text-xl text-accent'>Chat Support</p>
                </div>
                <div className='flex gap-2 pt-5 '>
                    <Icon icon="mdi:check" className='text-2xl text-secondary' />
                    <p className='text-xl text-accent'>No transaction fees</p>
                </div>
                <div className='flex gap-2 pt-5 '>
                    <Icon icon="mdi:check" className='text-2xl text-secondary' />
                    <p className='text-xl text-accent'>Unlimited Storage</p>
                </div>


                <button className={`btn w-full ${btnBg} hover:${btnBg} text-white mt-10`}>
                    <Icon icon="mdi:check-all" className='text-xl' /> Choose Plane
                </button>
            </div>
        </div>
    );
};

export default PricingCard;