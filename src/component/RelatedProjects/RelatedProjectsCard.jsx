/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const RelatedProjectsCard = ({project}) => {
    const { picture, name, title, textPrimary, textSecondary } = project;
    return (
        <Link to={'/details'} className="p-5 ">
            <div style={{ backgroundImage: `url(${picture})` }} className="w-52 h-36 sm:w-80 sm:h-44 bg-center bg-cover rounded-xl shadow-xl max-w-sm cursor-pointer">
                <div className=" p-2 w-full">
                    <h1 className={`${textPrimary} text-xl font-semibold`}>{name}</h1>
                    <p className={`${textSecondary} py-1`}>{title}</p>
                </div>
            </div>
        </Link>
    );
};

export default RelatedProjectsCard;