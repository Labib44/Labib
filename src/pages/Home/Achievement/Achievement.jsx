import heart from "../../../assets/Achievement/heart.png"
import blueprint from "../../../assets/Achievement/blueprint.png"
import star from "../../../assets/Achievement/star.png"
import idea from "../../../assets/Achievement/idea.png"
import AchievementCard from "./AchievementCard";
import { useTheme } from "../../../context/ThemeProvider/ThemeProvider";

const Achievement = () => {
    const { isDark} = useTheme();
    const AchievementDatas = [
        {
            id: 1,
            icon: heart,
            title: "Happy Clients",
            count: "800",
        },
        {
            id: 2,
            icon: blueprint,
            title: "Happy Clients",
            count: "400 +",
        },
        {
            id: 3,
            icon: star,
            title: "Happy Clients",
            count: "1000",
        },
        {
            id: 4,
            icon: idea,
            title: "Happy Clients",
            count: "20",
        },
    ]
    return (
        <div id="achievement" className={`" pb-28 bg-white " ${!isDark ? "bg-[#303841]" : ""}`}>
            <div className="container mx-auto pt-32 lg:pt-32 md:pt-20 sm:pt-20 px-24 lg:px-0 md:px-0 sm:px-0">
                <h1 className="p-2 font-bold text-sm text-accent text-center">Counter</h1>
                <h1 className={`" text-4xl lg:text-4xl md:text-3xl sm:text-3xl text-primary font-bold text-center " ${!isDark ? "text-white" : ""}`}>Our Achievement</h1>
                <p className="text-center py-2 px-5  text-accent text-xl mt-3">A Private Limited is the most popular type of partnership Malta. The limited liability is, in fact, the only type of company allowed by Companies.</p>

               <div className="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-20 p-5">
                {
                    AchievementDatas.map((AchievementData)=><AchievementCard
                    key={AchievementData}
                    AchievementData={AchievementData}
                    ></AchievementCard>)
                }
               </div>
            </div>

        </div>
    );
};

export default Achievement;