// import img1 from '../../assets/workSlider/img-1.png'
import RelatedProjects from '../../component/RelatedProjects/RelatedProjects';
import { useTheme } from '../../context/ThemeProvider/ThemeProvider';
import DetailsSlider from './DetailsSlider/DetailsSlider';


const ProjectDetails = () => {
    const { isDark } = useTheme();

    return (
        <div className={`${!isDark ? "bg-[#343F4B] " : "bg-[#F4F6FB]"}`}>
            <div className=" container mx-auto p-5 py-36">
                <div className='flex lg:flex md:flex-wrap sm:flex-wrap justify-between'>
                    <div className='flex-1 max-w-4xl'>
                        <div>
                            <h1 className='text-xl text-secondary font-bold px-2 mb-10'>Proggamoy AI Quran</h1>
                            <p className='px-2 pb-5'>The "Proggamoy Quran" app will be designed to be the ultimate tool for studying the Quran. It will offer a wide range of features to aid in Quran learning and memorization, including a robust audio system with repeat functions. Additionally, it will provide word-by-word analysis, translations, and Tafsir Ibn Kathir, all of which can help to deepen your understanding of the Quran.</p>
                            <DetailsSlider></DetailsSlider>
                        </div>

                    </div>

                    <div className='sm:mt-20'>
                        <h1 className='text-xl font-bold mb-10'>REALTED PROJECTS</h1>

                        <RelatedProjects></RelatedProjects>
                    </div>
                </div>
                {/* Description, Technology, Features */}
                {/* <div className='mt-20'>
                    <h1 className='text-xl text-primary font-semibold'>Technology : <span className='text-primary font-normal'>Tailwind css, React js, JavaScript</span></h1>
                </div> */}
            </div>
        </div>
    );
};

export default ProjectDetails;