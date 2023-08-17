import PricingTabBar from "./PricingTabBar/PricingTabBar";
import shape from "../../../assets/animation/shape.png";
import shape2 from "../../../assets/animation/shape-2.png";
import shape3 from "../../../assets/animation/shape-3.png";
import { useTheme } from "../../../context/ThemeProvider/ThemeProvider";


const Pricing = () => {
    const { isDark} = useTheme();

    return (
        <div id="pricing" className={`" p-5 " ${!isDark ? "bg-[#303841]": ""}`}>
            <div className="flex justify-between">
                <img src={shape} alt="" className='ml-44 lg:ml-44 md:ml-20 sm:ml-10 mt-24 animate-shape' />
                <img src={shape3} alt="" className=' mr-44 lg:mr-44 md:mr-20 sm:mr-10 mt-24 animate-shape3' />
            </div>
            <div className="container mx-auto pt-32 pb-32 lg:pt-32 md:pt-20 sm:pt-20 px-24 lg:px-0 md:px-0 sm:px-0 -mt-44">
                <p className="text-xl text-accent text-center">Pricing</p>
                <h1 className={`" text-4xl lg:text-4xl md:text-3xl sm:text-3xl text-primary font-bold text-center " ${!isDark ? "text-white": ""}`}>Choose your Plan</h1>
                <p className="text-center py-2 px-5  text-accent text-xl mt-3">A Private Limited is the most popular type of partnership Malta. The limited liability is, in fact, the only type of company allowed by Companies.</p>

                {/* Pricing tab bar */}
                <div className="mt-10">
                    <PricingTabBar></PricingTabBar>
                </div>
                <div className="flex justify-end">
                    <img src={shape2} alt="" className=' animate-shape' />
                </div>
            </div>

        </div>
    );
};

export default Pricing;