import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './WorkSlider.css';

// import required modules
// import { Autoplay, } from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import img1 from "../../../../assets/workSlider/img-1.png"
import img2 from "../../../../assets/workSlider/img-2.png"
import img3 from "../../../../assets/workSlider/img-3.png"
import img4 from "../../../../assets/workSlider/img-4.png"

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
            img: img1
        },
        {
            img: img2
        },
        {
            img: img3
        },
        {
            img: img4
        },
        {
            img: img1
        },
        {
            img: img2
        },
        {
            img: img3
        },
        {
            img: img4
        },
        {
            img: img1
        },
        {
            img: img2
        },
        {
            img: img3
        },
        {
            img: img4
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
                    sliderData.map((slData, idx) => <SwiperSlide
                        key={idx}
                        slData={slData}
                    ><img src={slData.img} alt="" /></SwiperSlide>)
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