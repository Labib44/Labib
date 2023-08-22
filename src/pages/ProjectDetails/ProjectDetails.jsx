// import img1 from '../../assets/workSlider/img-1.png'
import RelatedProjects from '../../component/RelatedProjects/RelatedProjects';
import DetailsSlider from './DetailsSlider/DetailsSlider';


const ProjectDetails = () => {
  
    return (
        <div className="bg-[#F4F6FB]">
            <div className=" container mx-auto p-5">
                <div className='grid grid-cols-2 pt-10 pb-36'>
                    <div>
                        <h1 className='text-xl font-bold px-2 mb-10'>PROJECT DETAILS</h1>
                        <DetailsSlider></DetailsSlider>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold'>REALTED PROJECTS</h1>

                       <RelatedProjects></RelatedProjects>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;