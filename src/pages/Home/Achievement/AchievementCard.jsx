/* eslint-disable react/prop-types */
import CountUp from 'react-countup';
import { useTheme } from '../../../context/ThemeProvider/ThemeProvider';



const AchievementCard = ({ AchievementData }) => {
    const { isDark} = useTheme();
    const { icon, title, count } = AchievementData;

    return (
        <div className={`" rounded-2xl shadow-2xl p-6  " ${!isDark ? "bg-[#343F4B]" : "bg-[#F4F6FB]"}`}>
            <div className="flex justify-center">
                <img src={icon} alt="" className="w-16 h-16" />
            </div>
            <h1 className={`" text-4xl text-center font-bold mt-5 " ${!isDark ? "text-white" : ""}`}><CountUp end={parseInt(count)} />+</h1>
            <h1 className="text-xl text-center text-accent font-bold mt-3"> {title}</h1>
        </div>
    );
};

export default AchievementCard;