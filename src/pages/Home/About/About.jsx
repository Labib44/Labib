import { useState } from "react";
import about from "../../../assets/about/about.png"
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import { useTheme } from "../../../context/ThemeProvider/ThemeProvider";

const About = () => {
    const [toggleState, setToggleState] = useState(1);
    const { isDark } = useTheme();

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <div className={`${!isDark ? " bg-[#303841] py-32" : "py-32"}`}>
            <div id="about" className=" container mx-auto px-24 lg:px-0 md:px-0 sm:px-0 ">
                <div className="flex gap-20 lg:gap-20 md:gap-10 sm:gap-7 lg:flex-wrap md:flex-wrap sm:flex-wrap p-5 pb-[95px] rounded-3xl shadow-lg">
                    <div className="">
                        <div className=" aboutRgb w-[550px] md:w-[550px] sm:w-[300px] h-[550px] md:h-[550px] sm:h-[300px] rounded-full mx-0 lg:mx-48 md:mx-20 sm:mx-5">
                            <img src={about} alt="" className="" />
                        </div>
                    </div>
                    <div className=" mt-0 lg:mt-28 md:mt-28 sm:mt-16">
                        <h1 className={`" text-6xl font-semibold p-3 " ${!isDark ? "text-white" : "text-primary"}`}>About Me</h1>
                        <p className=" text-accent p-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English..</p>

                        <div>
                            <div className="grid grid-flow-col text-center text-gray-500 max-w-sm">
                                <button
                                    onClick={() => toggleTab(1)}
                                    type=""
                                    className={
                                        toggleState === 1
                                            ? "underLineRgb flex justify-center border-b-4  text-accent text-xl py-4"
                                            : "flex justify-center text-accent text-xl py-4"
                                    }
                                >
                                    Skills
                                </button>
                                <button
                                    onClick={() => toggleTab(2)}
                                    type=""
                                    className={
                                        toggleState === 2
                                            ? "underLineRgb flex justify-center border-b-4  text-accent text-xl py-4"
                                            : "flex justify-center text-accent text-xl py-4"
                                    }
                                >
                                    Experience
                                </button>
                                <button
                                    onClick={() => toggleTab(3)}
                                    type=""
                                    className={
                                        toggleState === 3
                                            ? "underLineRgb flex justify-center border-b-4 text-accent text-xl py-4"
                                            : "flex justify-center text-accent text-xl py-4"
                                    }
                                >
                                    Education
                                </button>
                            </div>
                            <div className={toggleState === 1 ? " block" : " hidden"}>
                                <Skills></Skills>
                            </div>

                            <div className={toggleState === 2 ? " block" : " hidden"}>
                                <Experience></Experience>
                            </div>

                            <div className={toggleState === 3 ? " block" : " hidden"}>
                                <Education></Education>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;