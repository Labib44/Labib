// import img1 from '../../assets/workSlider/img-1.png'
import RelatedProjects from '../../component/RelatedProjects/RelatedProjects';
import { useTheme } from '../../context/ThemeProvider/ThemeProvider';
import DetailsSlider from './DetailsSlider/DetailsSlider';
import proggamoy from "../../assets/Proggamoy.png"


const ProjectDetails = () => {
    const { isDark } = useTheme();

    return (
        <div className={`${!isDark ? "bg-[#343F4B] p-5" : "bg-[#F4F6FB] p-5"}`}>
            <div className=" container mx-auto py-36">
                <div className='flex lg:flex md:flex-wrap sm:flex-wrap justify-between '>
                    <div className='flex-1 max-w-4xl '>
                        <div>
                            <div className='flex py-5'>
                                <div className='border-dashed border-r-2 border-green-600 p-5'>
                                    <img src={proggamoy} alt="" className='w-12 h-12 ' />
                                </div>
                                <div className='px-3 '>
                                    <h1 className={`' text-xl mt-8 font-bold mb-10 md:px-0 sm:px-0 ' ${!isDark ? "text-white" : "text-primary"}`}>Proggamoy AI Quran</h1>
                                </div>
                            </div>

                            <p className={`' px-3 md:px-0 sm:px-0 pb-5 ' ${!isDark ? "text-white" : "text-primary"}`}>The "Proggamoy Quran" app will be designed to be the ultimate tool for studying the Quran. It will offer a wide range of features to aid in Quran learning and memorization, including a robust audio system with repeat functions. Additionally, it will provide word-by-word analysis, translations, and Tafsir Ibn Kathir, all of which can help to deepen your understanding of the Quran.</p>
                            <DetailsSlider></DetailsSlider>
                        </div>
                        <div className='mt-32'>
                            <h1 className={`' text-xl font-semibold ' ${!isDark ? "text-white" : "text-primary"}`}>Technology : <span className=' font-normal'>Tailwind css, React js, JavaScript</span></h1>
                        </div>
                    </div>

                    <div className='mt-0 md:mt-32 sm:mt-32'>
                        <h1 className='text-xl text-secondary font-bold mb-5'> Related Projects</h1>

                        <RelatedProjects></RelatedProjects>
                    </div>
                </div>
                {/* Description, Technology, Features */}

            </div>
        </div>
    );
};

export default ProjectDetails;