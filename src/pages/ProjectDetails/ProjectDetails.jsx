// import img1 from '../../assets/workSlider/img-1.png'
import { useLoaderData } from 'react-router-dom';
import { useTheme } from '../../context/ThemeProvider/ThemeProvider';
import Connect from '../Home/Connect/Connect';
import { BsArrowRight } from "react-icons/bs";


const ProjectDetails = () => {
    const { isDark } = useTheme();
    const projectData = useLoaderData()
    console.log('project data...', projectData)

    const { picture, name, title, createdAt, technology, description, live, } = projectData.data

    return (
        <div className={`${!isDark ? "bg-[#343F4B]" : "bg-[#F4F6FB]"}`}>
            <div className={`" hero-image h-[400px] lg:h-[400px] md:h-[400px] sm:h-[300px] bg-cover bg-no-repeat" ${!isDark ? "bg-[#343F4B]" : "bg-[#F4F6FB]"}`}>

            </div>

            <div className=' container mx-auto py-10'>
                <h1 className={`text-center text-4xl font-serif font-extrabold p-5 ${!isDark ? "text-secondary" : " text-gray-700"}`}>Project Details</h1>
                <div className='flex justify-center '>
                    <div className="w-[800px] p-4 shadow-md bg-gray-50 rounded-lg">
                        <div className="flex justify-between pb-4 border-bottom">
                            <div className="flex items-center">
                                <h1 className='py-2 text-2xl font-serif font-bold hover:text-secondary duration-700'>{name}</h1>
                            </div>
                            <div className="flex items-center underline underline-offset-8 decoration-2 decoration-secondary py-0">
                            <a href={live} target="_blank" rel="noreferrer" className='text-secondary cursor-pointer mr-1 text-2xl font-serif font-bold'>Live</a>
                                <BsArrowRight className="text-2xl text-secondary"></BsArrowRight>
                            </div>
                            {/* <a href={live} target="_blank" rel="noreferrer" className='btn btn-sm cursor-pointer  text-2xl font-serif font-bold hover:text-secondary duration-700'>Live</a> */}
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <img src={picture} alt="" className="block object-cover object-center w-full rounded-md h-96 " />
                                <div className="flex items-center text-xs">
                                    <span>{createdAt}</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h1 className='text-xl font-semibold'>Type Of Project</h1>
                                <h3 className=" ">{title}</h3>

                                <h1 className='text-xl font-semibold'>Used Technology</h1>
                                <h3 className=" ">{technology}</h3>

                                <h1 className='text-xl font-semibold'>Description of Project</h1>
                                <p className="leadi ">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Connect></Connect>

        </div>
    );
};

export default ProjectDetails;