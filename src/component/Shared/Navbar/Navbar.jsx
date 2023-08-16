// import light from "../../../assets/navbar/logo-light.png"
import dark from "../../../assets/navbar/logo-dark.png"
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [isMobileMenu, setIsMobileMenu] = useState(false);
    const [fix, setFix]=useState(false);
    console.log(fix);
    function setFixed(){
        if(window.scrollY>=1){
            setFix(true)
        }
        else{
            setFix(false)
        }
    }
    window.addEventListener("scroll",setFixed)
    // console.log(isMobileMenu);
    const menuItem = <>
        <li className="flex"><Link className='flex items-center text-[13px] text-slate-500 font-semibold mr-5 hover:text-secondary duration-700 pt-5 lg:pt-0 md:mt-0' to='/'>HOME</Link></li>
        <li className="flex"><Link className='flex items-center text-[13px] text-slate-500 font-semibold mr-5 hover:text-secondary duration-700 pt-5 lg:pt-0 md:mt-0' to='/'>ABOUT US</Link></li>
        <li className="flex"><Link className='flex items-center text-[13px] text-slate-500 font-semibold mr-5 hover:text-secondary duration-700 pt-5 lg:pt-0 md:mt-0' to='/'>SERVICE</Link></li>
        <li className="flex"><Link className='flex items-center text-[13px] text-slate-500 font-semibold mr-5 hover:text-secondary duration-700 pt-5 lg:pt-0 md:mt-0' to='/'>WORK</Link></li>
        <li className="flex"><Link className='flex items-center text-[13px] text-slate-500 font-semibold mr-5 hover:text-secondary duration-700 pt-5 lg:pt-0 md:mt-0' to='/'>PRICING</Link></li>
        <li className="flex"><Link className='flex items-center text-[13px] text-slate-500 font-semibold mr-5 hover:text-secondary duration-700 pt-5 lg:pt-0 md:mt-0' to='/'>TESTIMONIAL</Link></li>
        <li className="flex"><Link className='flex items-center text-[13px] text-slate-500 font-semibold mr-5 hover:text-secondary duration-700 pt-5 lg:pt-0 md:mt-0' to='/'>BLOG</Link></li>
        <li className="flex"><Link className='flex items-center text-[13px] text-slate-500 font-semibold mr-5 hover:text-secondary duration-700 pt-5 lg:pt-0 md:mt-0' to='/'>CONTACT</Link></li>
    </>
    return (
        <div>
            <header className={fix ? "p-3 bg-white fixed z-50 w-full duration-700" : "p-3 bg-[#F4F6FB] duration-700"}>
                <div className=" flex justify-between h-16 mx-44 lg:mx-44 md:mx-0 sm:mx-0">
                    <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                        <img src={dark} alt="" className="w-32" />
                    </a>
                    <div className="md:hidden sm:hidden">
                        <ul className="items-stretch space-x-2 flex">
                            {menuItem}
                        </ul>
                    </div>
                    <div className="items-center flex-shrink-0 md:hidden sm:hidden">
                        <button className="self-center px-6 py-3 bg-[#1C2F50] text-white font-semibold rounded-full">Login</button>
                    </div>
                    <div className="hidden lg:block md:block sm:block ml-3">
                        <button className="p-4 hidden lg:block md:block sm:block"
                            onClick={() => setIsMobileMenu(!isMobileMenu)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>

                        {isMobileMenu && (
                            <ul className="absolute z-50 left-0 p-2 pb-5 shadow bg-base-100 w-full">
                                {menuItem}
                                <button className="self-center px-5 py-2 mt-5 bg-[#1C2F50] text-white font-semibold rounded-full ">Login</button>
                            </ul>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;