import light from "../../../assets/navbar/logo-light.png"
import dark from "../../../assets/navbar/logo-dark.png"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../../../context/ThemeProvider/ThemeProvider";
import * as Scroll from 'react-scroll';

const Navbar = () => {
    const [isMobileMenu, setIsMobileMenu] = useState(false);
    const [fix, setFix] = useState(false);
    const { isDark } = useTheme();
    let content ;


    function setFixed() {
        if (window.scrollY >= 1) {
            setFix(true)

        }
        else {
            setFix(false)
        }
    }
    window.addEventListener("scroll", setFixed)


    const menuItem = <>
        <li className="flex"><Link to="/" className='flex items-center text-[13px]  font-semibold mr-5 hover:text-secondary duration-700 pt-5 lg:pt-5 md:mt-0'>HOME</Link></li>
        <li className="flex"> <Scroll.Link to="about" spy={true} smooth={true} offset={-200} duration={2000} className='flex items-center text-[13px]  font-semibold mr-5 hover:text-secondary duration-700 pt-5 lg:pt-5 md:mt-0'>ABOUT US</Scroll.Link></li>
        <li className="flex"> <Scroll.Link to="works" spy={true} smooth={true} offset={-100} duration={2000} className='flex items-center text-[13px]  font-semibold mr-5 hover:text-secondary duration-700 pt-5 lg:pt-5 md:mt-0'>WORK</Scroll.Link></li>
        <li className="flex"> <Scroll.Link to="service" spy={true} smooth={true} duration={2000} className='flex items-center text-[13px]  font-semibold mr-5 hover:text-secondary duration-700 pt-5 lg:pt-5 md:mt-0'>SERVICE</Scroll.Link></li>
        <li className="flex"> <Scroll.Link to="pricing" spy={true} smooth={true} duration={2000} className='flex items-center text-[13px]  font-semibold mr-5 hover:text-secondary duration-700 pt-5 lg:pt-5 md:mt-0'>PRICING</Scroll.Link></li>
        <li className="flex"> <Scroll.Link to="testimonial" spy={true} smooth={true} offset={-100} duration={2000} className='flex items-center text-[13px]  font-semibold mr-5 hover:text-secondary duration-700 pt-5 lg:pt-5 md:mt-0'>TESTIMONIAL</Scroll.Link></li>
        <li className="flex"> <Scroll.Link to="blog" spy={true} smooth={true} offset={-100} duration={2000} className='flex items-center text-[13px]  font-semibold mr-5 hover:text-secondary duration-700 pt-5 lg:pt-5 md:mt-0'>BLOG</Scroll.Link></li>
        <li className="flex"> <Scroll.Link to="connect" spy={true} smooth={true} offset={-100} duration={2000} className='flex items-center text-[13px]  font-semibold mr-5 hover:text-secondary duration-700 pt-5 lg:pt-5 md:mt-0'>CONTACT</Scroll.Link></li>

    </>
   
   
    if(fix && !isDark){
        content=`${(fix && !isDark) ? " p-3 bg-[#303841] fixed z-50 w-full duration-700" : null}`
    }
    else if(!fix && !isDark){
        content=`${(!fix && !isDark) ? " p-3 bg-transparent fixed z-50 w-full duration-700" : null}`
    }
    else if(fix && isDark) {
        content=`${(fix && isDark) ? " p-3 bg-white fixed z-50 w-full duration-700" : null}`
    }
    else if(!fix && isDark){
        content=`${(!fix && isDark) ? " p-3 bg-transparent fixed z-50 w-full duration-700" : null}`
    }

    return (
        <div >
            <header className={`${ content} `}>
                <div className=" flex justify-between h-16 mx-44 lg:mx-0 md:mx-0 sm:mx-0 ">
                    <div>
                        <Link to={"/"} className="flex items-center">
                            {isDark ?
                                (<img src={dark} alt="" className="w-32" />)
                                :
                                (<img src={light} alt="" className="w-32" />)
                            }
                        </Link>
                    </div>
                    <div className="md:hidden sm:hidden">
                        <ul className={`"items-stretch flex gap-3 " ${!isDark ? "text-gray-200 cursor-pointer" : "cursor-pointer text-slate-500"}`}>
                            {menuItem}
                        </ul>
                    </div>
                    <div className="items-center flex-shrink-0 md:hidden sm:hidden">
                        {/* <button className="self-center px-6 py-3 bg-[#1C2F50] text-white font-semibold rounded-full">Login</button> */}
                    </div>
                    <div className="hidden md:block sm:block">
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
                                {/* <button className="self-center px-5 py-2 mt-5 bg-[#1C2F50] text-white font-semibold rounded-full ">Login</button> */}
                            </ul>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;