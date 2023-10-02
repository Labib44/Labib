import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules

import { Autoplay, Navigation } from 'swiper/modules';
import img1 from "../../../../assets/workSlider/AlQuran.png"
import img2 from "../../../../assets/workSlider/introBangla.png"
import img3 from "../../../../assets/workSlider/careeh.png"
import img4 from "../../../../assets/workSlider/carZone.png"
import img5 from "../../../../assets/workSlider/delicious.png"
import img6 from "../../../../assets/workSlider/doctorsPortal.png"

const WorkSlider = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const swiperRef = useRef();

    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    const sliderData = [
        {
            img: img1,
            header: "Proggamoy AI Quran",
            title: "E-Commerce",
            textPrimary: "text-[#4D4800]",
        },
        {
            img: img2,
            header: "Blog - Introbangla Ltd",
            title: "Blog website.",
            textPrimary: "text-[#1F65A4]",
        },
        {
            img: img3,
            header: "Charee",
            title: "Business website",
            textPrimary: "text-[#FF6101]",
        },
        {
            img: img4,
            header: "Car Zone",
            title: "E-Commerce",
            textPrimary: "text-[#65483F]",
        },
        {
            img: img5,
            header: "Delicious Food",
            title: "Business website",
            textPrimary: "text-[#65483F]",
        },
        {
            img: img6,
            header: "Doctors Portal",
            title: "Booking website",
            textPrimary: "text-[#495164]",
        },
        
       
        



    ]

    return (
        <div className="">
            <div className="flex mt-10">
                <div className=" border-[3px] border-secondary w-12 h-12 rounded-full cursor-pointer mr-2"
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    <AiOutlineArrowLeft className="text-3xl text-secondary m-[6px]"></AiOutlineArrowLeft>
                </div>
                <div className=" border-[3px] border-secondary w-12 h-12 rounded-full cursor-pointer"
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    <AiOutlineArrowRight className="text-3xl text-secondary m-[6px]"></AiOutlineArrowRight>
                </div>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}


                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                modules={[Autoplay, Navigation]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}

                onAutoplayTimeLeft={onAutoplayTimeLeft}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                }}

                className="mySwiper mt-10"
            >
                {
                    sliderData.map((slData, idx) => <div
                        key={idx}
                    >
                        <SwiperSlide>
                            <div className=" ">
                                <div className="p-3">
                                    <h1 className={`${slData.textPrimary} text-xl font-semibold`}>{slData.header}</h1>
                                    <p className={`${slData.textSecondary}`}>{slData.title}</p>
                                </div>
                                <img src={slData.img} alt="" className="rounded-[30px] h-64" />
                                {/* <div className=" fixed top-5 p-10 w-full">
                                    <h1 className={`${slData.textPrimary} text-xl font-semibold`}>{slData.header}</h1>
                                    <p className={`${slData.textSecondary}`}>{slData.title}</p>
                                </div> */}
                            </div>
                        </SwiperSlide>
                    </div>)
                }

                <div className="autoplay-progress hidden" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};

export default WorkSlider;