import owner from "../../../assets/home/banner/labib.png"
import hi from "../../../assets/home/banner/hi-icon.png"
import { Icon } from '@iconify/react';
import brand from "../../../assets/home/banner/brand.png"
import VideoPlayer from "../../../component/VideoPlayer/VideoPlayer";
import shape2 from "../../../assets/animation/shape-2.png";
import shape3 from "../../../assets/animation/shape-3.png";
import { useTheme } from "../../../context/ThemeProvider/ThemeProvider";
import reactJs from "../../../assets/home/banner/reactJs.png"


const Banner = () => {
    const { isDark} = useTheme();
    return (
        <div id="home" className={`" hero-image  h-screen lg:h-screen md:h-auto sm:h-auto bg-cover bg-no-repeat" ${!isDark ? "bg-[#343F4B]" : "bg-[#F4F6FB]"}`}>
            <div className="container mx-auto">
            <div className="flex justify-end pr-44 md:pr-0 sm:pr-0">
                <img src={shape3} alt="" className=' mr-44 md:mr-20 sm:mr-10 mt-24 animate-shape3' />
            </div>
                {/* -----------1---------- */}
                <div className="flex md:flex-col sm:flex-col justify-between mx-60 lg:mx-20 md:mx-5 sm:mx-5 ">
                    <div className={`" rounded-2xl w-auto md:w-52 sm:w-52 h-auto lg:h-auto md:h-24 sm:h-24 px-8 my-3" ${!isDark ? "bg-[#303841] flex items-center": "bg-white flex items-center"}`}>
                        <img src={hi} alt="" className="w-12 " />
                        <div className="ml-5">
                            <p className={`${!isDark ? "text-white" :"text-accent"}`}>Hi, I am </p>
                            <p className={`" text-xl font-bold font-sans" ${!isDark ? "text-white": "text-primary"}`}>LABIB</p>
                        </div>
                    </div>
                    <div className=" max-w-xs">
                        <Icon icon="carbon:play-filled" className="text-5xl text-[#C7E9EA] cursor-pointer" onClick={() => window.my_modal_3.showModal()} />
                        <p className="text-xl text-accent mt-3">I am designer during daytime & work with batman during night.</p>
                        {/* <BannerModal></BannerModal> */}
                        <VideoPlayer></VideoPlayer>
                    </div>
                </div>
                {/* ----------2---------- */}
                <div className="flex md:flex-col sm:flex-col justify-between mt-40 max-h-24 mx-40 lg:mx-5 md:mx-5 sm:mx-5">
                    <div className={`"  rounded-2xl p-3 lg:mt-0 md:mt-5 sm:mt-5" ${!isDark ? "bg-[#303841] text-white":"bg-white text-primary"}`}>
                        <div className="flex items-center pt-2">
                            <Icon icon="vscode-icons:file-type-reactjs" className="text-3xl mr-3" />
                            {/* <img src={reactJs} alt="" className="h-8 w-9 mr-2" /> */}
                            <p>React Js</p>
                        </div>
                        <div className="flex items-center pt-2">
                            <Icon icon="teenyicons:nextjs-outline" className="text-3xl mr-3" />
                            <p>Next Js</p>
                        </div>
                    </div>

                    <div className={`" rounded-2xl p-3 lg:mt-0 md:mt-5 sm:mt-5" ${!isDark ? "bg-[#303841] text-white" : "bg-white text-primary"}`}>
                        <div className="flex items-center p-2">
                            <Icon icon="ic:outline-email" className="text-2xl mr-3" />
                            <p>mdlabib162@gmail.com</p>
                        </div>
                        <div className="flex items-center p-2">
                            <Icon icon="mdi:phone-outline" className="text-2xl mr-3" />
                            <p>01739999465</p>
                        </div>
                    </div>

                </div>
                {/* --------------3------------ */}
                <div className="flex md:flex-col sm:flex-col justify-between mt-40 mx-72 lg:mx-28 md:mx-5 sm:mx-5">
                    <div className="flex items-center p-3 lg:mt-0 md:mt-5 sm:mt-5">
                        <p className={`" text-6xl lg:text-4xl font-bold " ${!isDark ? "text-white" : "text-primary"}`}>2</p>
                        <div className="text-accent p-2">
                            <p>Years</p>
                            <p className="">M E R N</p>
                        </div>

                    </div>

                    <div className={`" rounded-2xl p-3 mt-0 lg:mt-0 md:mt-5 sm:mt-5 " ${!isDark ? "bg-[#303841]" : "bg-white"}`}>
                        <img src={brand} alt="" className="mx-auto w-10" />
                        <p className={`" text-center font-semibold " ${!isDark ? "text-white" : "text-primary"}`}>Cretifid</p>
                        <p className="text-center text-accent">UI/UX Designer</p>
                    </div>
                </div>
                {/* animation */}
                <div className=" flex justify-end pr-44 lg:pr-44 md:pr-0 sm:pr-0">
                    <img src={shape2} alt="" className=' animate-shape' />
                </div>
            </div>
            <div className=" w-[790px] lg:w-[710px] md:w-auto sm:w-auto mx-auto -mt-[709px] lg:-mt-[834px] md:mt-0 sm:mt-0 ">
                <img src={owner} alt="" className="pr-20 lg:pr-20 md:pr-10 sm:pr-10 w-full" />
            </div>

        </div>
    );
};

export default Banner;