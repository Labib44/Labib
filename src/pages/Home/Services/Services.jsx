import { MdCached } from "react-icons/md";
import { BiCommentAdd } from "react-icons/bi";
import { BsArrowUpSquare,BsLayersFill } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { PiChartLineBold } from "react-icons/pi";
import ServicesCard from "./ServicesCard";

const Services = () => {
    const serviceDatas=[
        {
            id:1,
            icon:<MdCached/>,
            bgcolor: 'bg-[#E6DFF5]',
            textcolor: 'text-[#8e63e9]',
            title:"Research & Analysis",
            description:"We use a customized application specifically designed a testing gnose to keep away for people.",

        },
        {
            id:2,
            icon:<BiCommentAdd/>,
            bgcolor: 'bg-[#F4D2D2]',
            textcolor: 'text-[#ef5555]',
            title:"Research & Analysis",
            description:"We use a customized application specifically designed a testing gnose to keep away for people.",

        },
        {
            id:3,
            icon:<BsLayersFill/>,
            bgcolor: 'bg-[#FFF5CC]',
            textcolor: 'text-[#e5ae47]',
            title:"Research & Analysis",
            description:"We use a customized application specifically designed a testing gnose to keep away for people.",

        },
        {
            id:4,
            icon:<BsArrowUpSquare/>,
            bgcolor: 'bg-[#D3DEEE]',
            textcolor: 'text-[#639df5]',
            title:"Research & Analysis",
            description:"We use a customized application specifically designed a testing gnose to keep away for people.",

        },
        {
            id:5,
            icon:<PiChartLineBold/>,
            bgcolor: 'bg-[#D5F0EF]',
            textcolor: 'text-[#3ea9a6]',
            title:"Research & Analysis",
            description:"We use a customized application specifically designed a testing gnose to keep away for people.",

        },
        {
            id:6,
            icon:<HiOutlineMailOpen/>,
            bgcolor: 'bg-[#F0D6E4]',
            textcolor: 'text-[#a73371]',
            title:"Research & Analysis",
            description:"We use a customized application specifically designed a testing gnose to keep away for people.",

        },
        
    ]
    return (
        <div className="mt-20 pb-28 bg-[#F4F6FB]">
            <div className="container mx-auto pt-32 lg:pt-32 md:pt-20 sm:pt-20 p-5 px-36 lg:px-0 md:px-0 sm:px-0">
                <h1 className="p-2 font-bold text-sm text-accent text-center">WHAT WE OFFER</h1>
                <h1 className="text-4xl lg:text-4xl md:text-3xl sm:text-3xl text-primary font-semibold text-center">Affordable Services</h1>
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