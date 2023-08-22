import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const RelatedProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className="">
            <div className="grid grid-cols-2 lg:gird-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3">
                {
                    projects.map((project) =>
                        <div className="rounded-md shadow-2xl"
                        key={project.id}
                        >
                            <div>
                                <img src={project.picture} alt="" className="w-full h-44  rounded-t-md max-h-72" />
                            </div>
                            <div className="flex justify-between px-5 pt-3">
                                <h1 className=" text-primary font-bold">{project.name}</h1>
                                <Link to={'/details'} className="text-sm font-semibold text-secondary">Details</Link>
                            </div>
                            <div className="px-5 py-3">
                                <p className=" text-primary font-bold">Technology : <span className="text-sm font-normal">{project.technology}</span></p>
                                {/* <p className="text-primary py-3">{project.details}</p> */}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default RelatedProjects;