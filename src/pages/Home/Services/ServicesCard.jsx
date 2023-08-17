/* eslint-disable react/prop-types */

import { useTheme } from "../../../context/ThemeProvider/ThemeProvider";


const ServicesCard = ({ serviceData }) => {
    const { isDark} = useTheme();
    const { icon, title, description, bgcolor, textcolor } = serviceData;
    
    return (
        <div className={`" rounded-2xl shadow-2xl p-6 bg-white " ${!isDark ? "bg-[#303841]" : ""}`}>
            <div className={`w-14 h-14 ${bgcolor} text-3xl ${textcolor} p-3 rounded-xl`}>
                {icon}
            </div>
            <h1 className={`" text-2xl text-primary font-semibold py-5 " ${!isDark ? "text-white" : ""}`}>{title}</h1>
            <p className="text-accent text-xl">{description}</p>
        </div>
    );
};

export default ServicesCard;