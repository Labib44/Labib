import { MdCached } from "react-icons/md";
import { BiCommentAdd } from "react-icons/bi";
import { BsArrowUpSquare,BsLayersFill } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { PiChartLineBold } from "react-icons/pi";
import ServicesCard from "./ServicesCard";
import { useTheme } from "../../../context/ThemeProvider/ThemeProvider";

const Services = () => {
    const { isDark} = useTheme();
    const serviceDatas=[
        {
            id:1,
            icon:<MdCached/>,
            bgcolor: 'bg-[#E6DFF5]',
            textcolor: 'text-[#8e63e9]',
            title:"Website Design & Development.",
            description:"We build applications that work for your business and your users.  we bring front-end, back-end, and architecture together to meet your business needs.",

        },
       
        {
            id:3,
            icon:<BsLayersFill/>,
            bgcolor: 'bg-[#FFF5CC]',
            textcolor: 'text-[#e5ae47]',
            title:"Research & Analysis.",
            description:"Websites that are based on thorough research and analysis are more likely to succeed in attracting and retaining visitors, achieving business goals, and staying ahead of the competition.",

        },
        {
            id:2,
            icon:<BiCommentAdd/>,
            bgcolor: 'bg-[#F4D2D2]',
            textcolor: 'text-[#ef5555]',
            title:"QA & Testing.",
            description:"QA and testing ensure that the website functions as intended and provides a positive user experience. This includes checking the website's usability, accessibility, and overall user interface design.",

        },
        {
            id:4,
            icon:<BsArrowUpSquare/>,
            bgcolor: 'bg-[#D3DEEE]',
            textcolor: 'text-[#639df5]',
            title:"Domain hosting.",
            description:"Domain hosting is a service that allows you to publish your website on the internet, making it accessible to users worldwide. Choosing the right hosting plan and provider is crucial for the performance, security, and reliability of your website.",

        },
        {
            id:5,
            icon:<PiChartLineBold/>,
            bgcolor: 'bg-[#D5F0EF]',
            textcolor: 'text-[#3ea9a6]',
            title:"2 month free maintenance.",
            description:"we are committed to your success. Our 2 Months Free Maintenance Package is designed to empower your online presence, giving you the freedom to concentrate on what you do best – running your business.",

        },
        {
            id:6,
            icon:<HiOutlineMailOpen/>,
            bgcolor: 'bg-[#F0D6E4]',
            textcolor: 'text-[#a73371]',
            title:"Online support (24/7).",
            description:"Partnering with means more than just having a service provider – it means having a dedicated team of professionals committed to your success, day and night. With our 24/7 online support, your business is always in capable hands.",

        },
        
    ]
    return (
        <div id="service" className={`" pb-28 " ${!isDark ? " bg-[#343F4B] " : "bg-[#F4F6FB]"}`}>
            <div className="container mx-auto pt-32 lg:pt-32 md:pt-20 sm:pt-20 p-5 px-24 lg:px-0 md:px-0 sm:px-0">
                <h1 className="p-2 font-bold text-sm text-accent text-center">WHAT WE OFFER</h1>
                <h1 className={`" text-4xl lg:text-4xl md:text-3xl sm:text-3xl font-semibold text-center " ${!isDark ? "text-white" : "text-primary"}`}>Affordable Services</h1>
                <p className="text-center py-2 px-5 text-accent text-xl mt-3">A Private Limited is the most popular type of partnership Malta. The limited liability is, in fact, the only type of company allowed by Companies.</p>


                <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-5 mt-20 p-5">
                    {
                        serviceDatas.map((serviceData)=><ServicesCard
                        key={serviceData.id}
                        serviceData={serviceData}
                        ></ServicesCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;