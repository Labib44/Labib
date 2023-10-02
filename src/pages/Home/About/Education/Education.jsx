import { useTheme } from "../../../../context/ThemeProvider/ThemeProvider";


const Education = () => {
    const { isDark } = useTheme();
    return (
        <div className="relative col-span-12 px-4 space-y-6 ">
            <div className="col-span-8 space-y-8 relative px-4 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-300">
                <div className="flex flex-col relative before:absolute before:top-6 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-[#3e7b7d]">
                    <h3 className={`" text-xl text-primary font-semibold tracki ml-5 mt-6 " ${!isDark ? "text-white" : " "}`}>Bachelor’s Degree.</h3>
                    <p className="pt-2 text-accent tracki uppercase ml-5"> Daffodil International University (DIU), Dhaka Bangladesh.</p>
                    <p className="pt-2 text-accent ml-5 ">B.Sc. in Computer Science & Engineering (C.S.E) 2016-2021.</p>
                </div>
                <div className="flex flex-col relative before:absolute before:top-0 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-[#3e7b7d]">
                    <h3 className={`" text-xl text-primary font-semibold tracki ml-5 " ${!isDark ? "text-white" : " "}`}>Higher Secondary Certificate (HSC).</h3>
                    <p className="pt-2 text-accent tracki uppercase ml-5">Madaripur Govt. College, Madaripur. 2013-2015.</p>
                    <p className="pt-2 text-accent ml-5">Department of Science.</p>
                </div>
                <div className="flex flex-col relative before:absolute before:top-0 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-[#3e7b7d]">
                    <h3 className={`" text-xl text-primary font-semibold tracki ml-5 " ${!isDark ? "text-white" : " "}`}>Secondary School Certificate (SSC).</h3>
                    <p className="pt-2 text-accent tracki uppercase ml-5">Alhaj Aminuddin High School, Madaripur. 2011-2013.</p>
                    <p className="pt-2 text-accent ml-5">Department of Science.</p>
                </div>
                
                
            </div>
        </div>
    );
};

export default Education;