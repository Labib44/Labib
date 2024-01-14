import { useEffect, useState } from "react";
import AllProjectsCard from "./AllProjectsCard";
import { useTheme } from "../../context/ThemeProvider/ThemeProvider";
import axios from 'axios';


const AllProjects = () => {
    const { isDark } = useTheme();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_URI}/api/v1/project`)
            .then((res) => setProjects(res.data.data))
    }, [])

   
    return (
        <div className={` ${!isDark ? "bg-[#343F4B] " : "bg-[#F4F6FB]"}`}>
            <div className=" container mx-auto pt-20 px-24 lg:px-0 md:px-0 sm:px-0">
                <h1 className={`" text-4xl font-bold underline underline-offset-8 hover:text-secondary duration-700 px-5 py-10 " ${!isDark ? " text-white" : "text-primary"}`}>All Projects</h1>

                <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 pb-36">
                    {
                        projects?.map((project) => <AllProjectsCard
                            key={project._id}
                            project={project}
                        ></AllProjectsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllProjects;