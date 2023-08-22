/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeProvider/ThemeProvider";


const AllProjectsCard = ({ project }) => {
    const { isDark } = useTheme();
    const { picture, name, technology, details } = project;
    return (
        <div className={`" rounded-2xl shadow-2xl " ${!isDark ? "bg-[#303841]" : "bg-white"}`}>
            <div>
                <img src={picture} alt="" className="w-full rounded-t-2xl max-h-72" />
            </div>
            <div className="flex justify-between p-5">
                <h1 className="text-2xl text-primary font-bold">{name}</h1>
                <Link to={'/details'} className="text-xl font-semibold text-secondary">Details</Link>
            </div>
            <div className="p-5">
                <p className="text-xl text-primary font-bold">Technology: <span className="text-xl font-normal">{technology}</span></p>
                <p className="text-primary py-3">{details}</p>
            </div>
        </div>
    );
};

export default AllProjectsCard;