import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { EffectCoverflow, Navigation } from 'swiper/modules';
import img1 from "../../../../assets/testimonial/img1.png"
import img2 from "../../../../assets/testimonial/img2.png"
import img3 from "../../../../assets/testimonial/img3.png"
import img4 from "../../../../assets/testimonial/img4.png"
import img5 from "../../../../assets/testimonial/img5.png"


import 'swiper/css';
import 'swiper/css/navigation';
import { useTheme } from "../../../../context/ThemeProvider/ThemeProvider";

const TestimonialSlider = () => {
    const [swiper, setSwiper] = useState(null);
    const { isDark} = useTheme();

    const slideTo = (index) => swiper.slideTo(index);
    console.log(slideTo);

    const sliderDatas = [
        {
            img: img1,
            comment: "We use a customized application specifically designed a testing gnose to keep away for people.",
            title: "Janice C. Campbe",
            profession: "Embedded analytics",
        },
        {
            img: img2,
            comment: "We use a customized application specifically designed a testing gnose to keep away for people.",
            title: "Janice C. Campbe",
            profession: "Embedded analytics",
        },
        {
            img: img3,
            comment: "We use a customized application specifically designed a testing gnose to keep away for people.",
            title: "Janice C. Campbe",
            profession: "Embedded analytics",
        },
        {
            img: img4,
            comment: "We use a customized application specifically designed a testing gnose to keep away for people.",
            title: "Janice C. Campbe",
            profession: "Embedded analytics",
        },
        {
            img: img5,
            comment: "We use a customized application specifically designed a testing gnose to keep away for people.",
            title: "Janice C. Campbe",
            profession: "Embedded analytics",
        },
    ]
    return (
        <div className="">

            <Swiper
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 2.5,
                }}

                modules={[EffectCoverflow, Navigation]}
                className="swiper_container"
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
            >


                <div className="m-10 ">
                    {
                        sliderDatas.map((sliderData, idx) =>
                            <SwiperSlide

                                className="mt-20"
                                key={idx}
                            >
                                {({ isActive }) => (
                                   
                                    <div className={`${isActive ? "border-[3px] rgbBorder rounded-3xl -translate-y-16 duration-700 mt-20 p-5" : "mt-20 p-5 contrast-50"}`}>
                                        <div className="avatar flex justify-center -mt-14">
                                            <div className="w-[70px] rounded-full">
                                                <img src={sliderData.img} alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <p className=" text-accent text-center py-5">"{sliderData.comment}"</p>
                                            <hr />
                                            <h1 className={`" text-center text-2xl text-primary font-bold pt-4 " ${!isDark ? "text-white" : " text-primary"}`}>{sliderData.title}</h1>
                                            <p className="font-semibold text-accent text-center py-2">{sliderData.profession}</p>
                                        </div>
                                    </div>
                               
                                  
                                )}
                                
                            </SwiperSlide>)
                    }
                </div>

            </Swiper>
        </div>
    );
};

export default TestimonialSlider;