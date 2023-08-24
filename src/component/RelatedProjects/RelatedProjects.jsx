import { useEffect, useState } from "react";
import RelatedProjectsCard from "./RelatedProjectsCard";


const RelatedProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className="">
            <div className=" grid grid-cols-1 lg:grid-cols-1 md:grid-cols-3 sm:grid-cols-1 gap-3">
                {
                    projects.map((project) => <RelatedProjectsCard
                    key={project.id}
                    project={project}
                    ></RelatedProjectsCard>)
                }
            </div>
        </div>
    );
};

export default RelatedProjects;