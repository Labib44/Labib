/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const AllBlogsCard = ({ blogData }) => {
    const { img, title, author, textSecondary, textPrimary } = blogData;
    return (
        <Link to={'/'} className=" ">
            <div style={{ backgroundImage: `url(${img})` }} className="w-full h-96 bg-center bg-cover rounded-[30px] shadow-xl max-w-sm cursor-pointer">
                <div className=" p-10 w-full">
                    <h1 className={`${textPrimary} text-xl font-semibold`}>{title}</h1>
                    <p className={`${textSecondary} py-2`}>{author}</p>
                </div>
            </div>
        </Link>
    );
};

export default AllBlogsCard;