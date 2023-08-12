
import img1 from "../../../assets/testimonial/img1.png"
// import TestimonialSlider from "./TestimonialSlider/TestimonialSlider";

const Testimonial = () => {
    return (
        <div className="p-5">
            <div className="container mx-auto pt-32 pb-32 lg:pt-32 md:pt-20 sm:pt-20 px-24 lg:px-0 md:px-0 sm:px-0 -mt-44">
                <p className="text-xl text-accent text-center">TESTIMONIAL</p>
                <h1 className="text-4xl lg:text-4xl md:text-3xl sm:text-3xl text-primary font-bold text-center">People talk about us</h1>
                <p className="text-center py-2 px-5  text-accent text-xl mt-3">A Private Limited is the most popular type of partnership Malta. The limited liability is, in fact, the only type of company allowed by Companies.</p>

                {/* <TestimonialSlider></TestimonialSlider> */}
            </div>

            {/* <div className="border-4 border-orange-500 rounded-3xl max-w-sm p-2">
                <div className="avatar flex justify-center -mt-12">
                    <div className="w-[70px] rounded-full">
                        <img src={img1} alt="" />
                    </div>
                </div>
                <div>
                    <p className=" font-semibold text-accent text-center py-5">" We use a customized application specifically designed a testing gnose to keep away for people."</p>
                    <hr />
                    <h1 className="text-center text-2xl text-primary font-bold pt-4">Janice C. Campbe</h1>
                    <p className="font-semibold text-accent text-center py-2">Embedded analytics</p>
                </div>
            </div> */}

        </div>
    );
};

export default Testimonial;