/* eslint-disable react/prop-types */

import { useTheme } from "../../../context/ThemeProvider/ThemeProvider";


const ServicesCard = ({ serviceData }) => {
    const { isDark} = useTheme();
    const { icon, title, description, bgcolor, textcolor } = serviceData;
    
    return (
        <div className={`" rounded-2xl shadow-2xl p-6 transition ease-in-out hover:-translate-y-4 duration-700 " ${!isDark ? "bg-[#303841]" : "bg-white"}`}>
            <div className={`w-14 h-14 ${bgcolor} text-3xl ${textcolor} p-3 rounded-xl`}>
                {icon}
            </div>
            <h1 className={`" text-2xl font-semibold py-5 " ${!isDark ? "text-white" : "text-primary"}`}>{title}</h1>
            <p className="text-accent text-xl">{description}</p>
        </div>
    );
};

export default ServicesCard;