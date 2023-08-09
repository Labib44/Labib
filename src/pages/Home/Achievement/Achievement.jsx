import heart from "../../../assets/Achievement/heart.png"
import blueprint from "../../../assets/Achievement/blueprint.png"
import star from "../../../assets/Achievement/star.png"
import idea from "../../../assets/Achievement/idea.png"
import AchievementCard from "./AchievementCard";

const Achievement = () => {
    const AchievementDatas = [
        {
            id: 1,
            icon: heart,
            title: "Happy Clients",
            count: "800K +",
        },
        {
            id: 2,
            icon: blueprint,
            title: "Happy Clients",
            count: "800K +",
        },
        {
            id: 3,
            icon: star,
            title: "Happy Clients",
            count: "800K +",
        },
        {
            id: 4,
            icon: idea,
            title: "Happy Clients",
            count: "800K +",
        },
    ]
    return (
        <div className=" pb-28 bg-white">
            <div className="container mx-auto pt-32 lg:pt-32 md:pt-20 sm:pt-20 px-36 lg:px-0 md:px-0 sm:px-0">
                <h1 className="p-2 font-bold text-sm text-accent text-center">Counter</h1>
                <h1 className="text-4xl lg:text-4xl md:text-3xl sm:text-3xl text-primary font-bold text-center">Our Achievement</h1>
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