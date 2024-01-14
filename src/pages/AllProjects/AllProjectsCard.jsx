/* eslint-disable react/prop-types */
// import { useTheme } from "../../context/ThemeProvider/ThemeProvider";
import { RiLiveLine } from "react-icons/ri";
import { MdOutlineLabelImportant } from "react-icons/md";
import { Link } from "react-router-dom";

const AllProjectsCard = ({ project }) => {
    // const { isDark } = useTheme();
    const { picture, name, title, _id, live } = project;


    return (


        <div className="w-full relative group ">


            <div className="max-w-80 max-h-80 relative overflow-y-hidden">
                <div className="">
                    <img src={picture} alt="" />
                </div>
                <div className="absolute top-6 left-8">
                </div>
                <div className="w-full h-24 absolute bg-white -bottom-[135px] group-hover:bottom-0 duration-700">
                    <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">

                        <li
                            className="text-[#767676] hover:text-primeColor font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
                        >

                            <a href={live} target="_blank" rel="noreferrer">Live</a>
                            <span>
                                <RiLiveLine />
                            </span>
                        </li>
                        <li

                            className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
                        >
                            <Link to={`/projectDetails/${_id}`} > View Details</Link>
                            <span className="text-lg">
                                <MdOutlineLabelImportant />
                            </span>
                        </li>

                    </ul>
                </div>
            </div>
            <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
                <div className="flex items-center justify-between font-titleFont">
                    <h2 className="text-lg text-primeColor font-bold">
                        {name}
                    </h2>
                    {/* <p className="text-[#767676] text-[14px]">{title }</p> */}
                </div>
                <div>
                    <p className="text-[#767676] text-[14px]">{title}</p>
                </div>
            </div>
        </div>
    );
};

export default AllProjectsCard;