import { Link } from "react-router-dom";
import { useTheme } from "../../../context/ThemeProvider/ThemeProvider";
import WorkSlider from "./WorkSlider/WorkSlider";
import { BsArrowRight } from "react-icons/bs";


const Works = () => {
    const { isDark} = useTheme();

    return (
        <div id="works" className={`" px-5 " ${!isDark ? "bg-[#343F4B]": "bg-[#F4F6FB]"}`}>
            <div className="container mx-auto pt-32 pb-32 lg:pt-32 md:pt-20 sm:pt-20 px-24 lg:px-0 md:px-0 sm:px-0">
                <div className="flex justify-between">
                    <div>
                        <h1 className={`" text-4xl lg:text-4xl md:text-3xl sm:text-3xl text-primary font-bold " ${!isDark ? "text-white" : ""}`}>My Latest Work</h1>
                        <p className="py-1  text-accent text-xl">Prefect solution for digital experience</p>
                    </div>
                    <div className="flex items-center underline underline-offset-8 decoration-2 decoration-secondary py-0">

                        <Link to={"/allProjects"} className="text-xl text-secondary font-bold mr-2">More Work</Link>
                        <BsArrowRight className="text-2xl text-secondary"></BsArrowRight>
                    </div>
                </div>

                <WorkSlider></WorkSlider>
            </div>

        </div>
    );
};

export default Works;