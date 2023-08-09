/* eslint-disable react/prop-types */


const AchievementCard = ({ AchievementData }) => {
    const { icon, title, count } = AchievementData;
    return (
        <div className=" rounded-2xl shadow-2xl p-6 bg-[#F4F6FB]">
            <div className="flex justify-center">
                <img src={icon} alt="" className="w-16 h-16" />
            </div>
            <h1 className="text-4xl text-center font-bold mt-5"> {count}</h1>
            <h1 className="text-xl text-center text-accent font-bold mt-3"> {title}</h1>
        </div>
    );
};

export default AchievementCard;