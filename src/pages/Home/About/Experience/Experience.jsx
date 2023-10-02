import { useTheme } from "../../../../context/ThemeProvider/ThemeProvider";


const Experience = () => {
    const { isDark } = useTheme();
    return (
        <div className="relative col-span-12 px-4 space-y-6 ">
            <div className="col-span-8 space-y-8 relative px-4 before:absolute before:top-2 before:bottom-0 before:w-[3px] before:-left-3 before:bg-gray-300">
                <div className="flex flex-col relative before:absolute before:top-6 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-[#3e7b7d]">
                    <h3 className={`" text-xl text-primary font-semibold tracki ml-5 mt-6 " ${!isDark ? "text-white" : ""}`}>Front-End Developer</h3>
                    <time className="pt-2 text-accent tracki uppercase ml-5">RISOSI. May 2, 2023 to July 10, 2023 (4-month internship) </time>
                    <p className="pt-2 text-accent ml-5 ">• Developing website to meet customer needs.
                        • Creating and implementing the source code of new applications.
                        • I worked with back-end developers and designers to construct user-friendly web interfaces</p>
                </div>
                <div className="flex flex-col relative before:absolute before:top-6 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-[#3e7b7d]">
                    <h3 className={`" text-xl text-primary font-semibold tracki ml-5 mt-6 " ${!isDark ? "text-white" : ""}`}>QA Engineer</h3>
                    <time className="pt-2 text-accent tracki uppercase ml-5">Vcube Soft & tech Limited. (August 4, 2021, to September 19, 2022.)</time>
                    <p className="pt-2 text-accent ml-5 ">• Build and launch new applications.
                        • Work closely with management to understand requirements and come with the solutions.
                        • Deadline targeting approach.</p>
                </div>
            </div>
        </div>
    );
};

export default Experience;