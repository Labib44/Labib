import { BsArrowRight } from "react-icons/bs";
import { FaHeart, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import { useTheme } from "../../../context/ThemeProvider/ThemeProvider";

const Footer = () => {
    const { isDark} = useTheme();
    const fristLinkData = [
        {
            title: "Security & Provciy",
            url: "",
        },
        {
            title: "Support",
            url: "",
        },
        {
            title: "Term & Condition",
            url: "",
        },
        {
            title: "Contact",
            url: "",
        },
        {
            title: "About Us",
            url: "",
        },

    ];
    return (
        <>
            <footer className={`" px-10 py-44 text-[#8E97A8] -mt-28 " ${!isDark ? "bg-[#303841]" : "bg-[#1C2F50]"}`}>
                <div className="container mx-auto grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4">
                    <div className="flex flex-col space-y-4">
                        <h1 className='text-[18px] font-semibold px-16 lg:px-0 md:px-0 sm:px-0'>A Private Limited is the most popular type of partnership Malta. The limited liability is, in fact, the only type of company allowed by Companies.</h1>
                        <div className="flex space-x-3 px-16 lg:px-0 md:px-0 sm:px-0">
                            <div className="w-10 h-10 bg-[#1C2F50] hover:bg-secondary text-secondary hover:text-primary rounded-t-full rounded-br-full border-dashed border border-secondary duration-700 p-[6px]">
                                <Icon icon="ic:round-facebook" className="text-2xl  "/>
                            </div>
                            <div className="w-10 h-10 bg-[#1C2F50] hover:bg-secondary text-secondary hover:text-primary rounded-t-full rounded-br-full border-dashed border border-secondary duration-700 p-[6px]">
                                <Icon icon="mdi:instagram" className="text-2xl"/>
                            </div>
                            <div className="w-10 h-10 bg-[#1C2F50] hover:bg-secondary text-secondary hover:text-primary rounded-t-full rounded-br-full border-dashed border border-secondary duration-700 p-[6px]">
                                <Icon icon="mdi:twitter" className="text-2xl"/>
                            </div>
                            <div className="w-10 h-10 bg-[#1C2F50] hover:bg-secondary text-secondary hover:text-primary rounded-t-full rounded-br-full border-dashed border border-secondary duration-700 p-[6px]">
                                <Icon icon="mdi:linkedin" className="text-2xl"/>
                            </div>
                            <div className="w-10 h-10 bg-[#1C2F50] hover:bg-secondary text-secondary hover:text-primary rounded-t-full rounded-br-full border-dashed border border-secondary duration-700 p-[6px]">
                                <Icon icon="mdi:pinterest" className="text-2xl"/>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">

                        <div className="">
                            <h2 className={`" font-bold text-2xl " ${!isDark ? "text-white" : ""}`}>Company</h2>
                            <div className="flex flex-col">
                                {
                                    fristLinkData.map((data, idx) =>
                                        <a key={idx} href={data.url} target="_blank" rel="noreferrer" className=' text-[16px] font-semibold pt-3 hover:text-secondary duration-700 flex items-center'><span><BsArrowRight className="text-xl mr-3"></BsArrowRight></span> {data.title}</a>
                                    )
                                }
                            </div>

                        </div>
                        <div>
                            <h2 className={`" font-bold text-2xl "  ${!isDark ? "text-white" : ""}`}>Linkedin</h2>
                            <div className={`" cusDiv mt-4 p-5 rounded-3xl h-40 " ${!isDark ? "bg-[#343F4B]" : " bg-[#1E3C5A]"}`}>
                                <p className="mb-3 lg:mb-3 md:mb-2 sm:mb-0">The full monty spiffing good time .</p>
                                <Link className="text-white hover:text-secondary duration-700">@Harold.com</Link>
                            </div>
                            <div className="flex -mt-5">
                                <FaLinkedin className="text-4xl text-white"></FaLinkedin>
                                <span className="ml-3 mt-1 text-xl font-semibold">Linkedin</span>
                            </div>
                        </div>

                    </div>
                    <div className="">
                        <h2 className={`" text-2xl font-bold " ${!isDark ? "text-white" : ""}`}>Sign up</h2>
                        <p className="text-xl py-4">Follow our newsletter to stay updated about agency.</p>
                        <div className="flex h-14 mt-5">
                            <input type="text" name="parcel" id="parcel" placeholder="Subscribe"
                                className="flex flex-1 text-left text-xl text-primary border sm:text-sm p-3 rounded-l-md outline-none h-16"
                            />
                            <span className="flex items-center px-5 pointer-events-none sm:text-sm rounded-r-md bg-secondary text-white text-xl h-16">
                                Go
                            </span>
                        </div>
                    </div>

                </div>
            </footer>
            <footer className={`" footer footer-center p-5 text-base-content h-20 " ${!isDark ? "bg-[#343F4B]" : "bg-[#15233B]"}`}>
                <div className="flex justify-center text-xl lg:text-xl md:text-xl sm:text-sm">
                    <p className="text-accent">© 2023 Harold. Design with -</p>
                    <FaHeart className="text-red-600"></FaHeart>
                    <p className="text-accent">All rights reserved. </p>
                </div>


            </footer>
        </>
    );
};

export default Footer;