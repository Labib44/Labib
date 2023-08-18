import { useTheme } from "../../../context/ThemeProvider/ThemeProvider";
import TestimonialSlider from "./TestimonialSlider/TestimonialSlider";

const Testimonial = () => {
    const { isDark} = useTheme();
    return (
        <div id="testimonial" className={`" p-5  " ${!isDark ? "bg-[#343F4B]" : "bg-[#F4F6FB] "}`}>
            <div className="container mx-auto py-28 lg:py-32 md:py-20 sm:py-20 px-24 lg:px-0 md:px-0 sm:px-0">
                <p className=" text-accent text-center">TESTIMONIAL</p>
                <h1 className={`" text-4xl lg:text-4xl md:text-3xl sm:text-3xl font-bold text-center " ${!isDark ? "text-white" : " text-primary"}`}>People talk about us</h1>
                <p className="text-center py-2 px-5  text-accent text-xl mt-3">A Private Limited is the most popular type of partnership Malta. The limited liability is, in fact, the only type of company allowed by Companies.</p>

                <TestimonialSlider></TestimonialSlider>
            </div>

        </div>
    );
};

export default Testimonial;