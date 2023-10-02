/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
// import { useTheme } from "../../context/ThemeProvider/ThemeProvider";


const AllProjectsCard = ({ project }) => {
    // const { isDark } = useTheme();
    const { picture, name, title, technology, details, textPrimary, textSecondary } = project;


    return (
        <Link to={'/'} className="rounded-2xl shadow-xl bg-gray-100">
            <div className=" p-6 w-full">
                <h1 className={`${textPrimary} text-xl font-semibold`}>{name}</h1>
                <p className={`${textSecondary} py-2`}>{title}</p>
            </div>
            <img src={picture} alt="" className=" rounded-b-2xl shadow-xl h-[250px]"/>
            {/* <div style={{ backgroundImage: `url(${picture})` }} className="w-full h-96 bg-center bg-cover rounded-[30px] shadow-xl max-w-sm cursor-pointer">
                
            </div> */}
        </Link>
    );
};

export default AllProjectsCard;