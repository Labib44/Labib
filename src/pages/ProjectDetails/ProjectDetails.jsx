// import img1 from '../../assets/workSlider/img-1.png'
import RelatedProjects from '../../component/RelatedProjects/RelatedProjects';
import DetailsSlider from './DetailsSlider/DetailsSlider';


const ProjectDetails = () => {
  
    return (
        <div className="bg-[#F4F6FB]">
            <div className=" container mx-auto p-5">
                <div className='grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5 pt-10 pb-36'>
                    <div>
                        <h1 className='text-xl text-secondary font-bold px-2 mb-10'>Proggamoy AI Quran</h1>
                        
                        <DetailsSlider></DetailsSlider>
                    </div>
                    <div className='sm:mt-20'>
                        <h1 className='text-xl font-bold mb-10'>REALTED PROJECTS</h1>

                       <RelatedProjects></RelatedProjects>
                    </div>
                </div>
                {/* Description, Technology, Features */}
            </div>
        </div>
    );
};

export default ProjectDetails;