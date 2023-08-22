import { useEffect, useState } from "react";
import AllProjectsCard from "./AllProjectsCard";


const AllProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className="bg-[#F4F6FB]">
            <div className=" container mx-auto ">
                <h1 className="text-4xl text-primary font-bold underline underline-offset-8 hover:text-secondary duration-700 px-5 py-10">All Projects</h1>

                <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 pb-36">
                    {
                        projects.map((project) => <AllProjectsCard
                            key={project.id}
                            project={project}
                        ></AllProjectsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllProjects;