// import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import img1 from "../../../../assets/testimonial/img1.png"
import img2 from "../../../../assets/testimonial/img2.png"
import img3 from "../../../../assets/testimonial/img3.png"
import img4 from "../../../../assets/testimonial/img4.png"
import img5 from "../../../../assets/testimonial/img5.png"

// Import Swiper styles
// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';

const TestimonialSlider = () => {
    // const swiperRef = useRef();

    // const sliderData = [
    //     {
    //         img: img1,
    //         comment: "We use a customized application specifically designed a testing gnose to keep away for people.",
    //         title: "Janice C. Campbe",
    //         profession: "Embedded analytics",
    //     },
    //     {
    //         img: img2,
    //         comment: "We use a customized application specifically designed a testing gnose to keep away for people.",
    //         title: "Janice C. Campbe",
    //         profession: "Embedded analytics",
    //     },
    //     {
    //         img: img3,
    //         comment: "We use a customized application specifically designed a testing gnose to keep away for people.",
    //         title: "Janice C. Campbe",
    //         profession: "Embedded analytics",
    //     },
    //     {
    //         img: img4,
    //         comment: "We use a customized application specifically designed a testing gnose to keep away for people.",
    //         title: "Janice C. Campbe",
    //         profession: "Embedded analytics",
    //     },
    //     {
    //         img: img5,
    //         comment: "We use a customized application specifically designed a testing gnose to keep away for people.",
    //         title: "Janice C. Campbe",
    //         profession: "Embedded analytics",
    //     },
    // ]
    return (
        // <div className="container">
        //     <h1 className="heading">Flower Gallery</h1>
        //     <Swiper
        //         effect={'coverflow'}
        //         grabCursor={true}
        //         centeredSlides={true}
        //         loop={true}
        //         slidesPerView={'auto'}
        //         coverflowEffect={{
        //             rotate: 0,
        //             stretch: 0,
        //             depth: 100,
        //             modifier: 2.5,
        //         }}
        //         pagination={{ el: '.swiper-pagination', clickable: true }}
        //         navigation={{
        //             nextEl: '.swiper-button-next',
        //             prevEl: '.swiper-button-prev',
        //             clickable: true,
        //         }}
        //         modules={[EffectCoverflow, Pagination, Navigation]}
        //         className="swiper_container"
        //     >
        //         <SwiperSlide>
        //             <img src={img1} alt="slide_image" />
        //         </SwiperSlide>
        //         <SwiperSlide>
        //             <img src={img2} alt="slide_image" />
        //         </SwiperSlide>
        //         <SwiperSlide>
        //             <img src={img3} alt="slide_image" />
        //         </SwiperSlide>
        //         <SwiperSlide>
        //             <img src={img4} alt="slide_image" />
        //         </SwiperSlide>
        //         <SwiperSlide>
        //             <img src={img5} alt="slide_image" />
        //         </SwiperSlide>
        //         <SwiperSlide>
        //             <img src={img2} alt="slide_image" />
        //         </SwiperSlide>
        //         <SwiperSlide>
        //             <img src={img2} alt="slide_image" />
        //         </SwiperSlide>

        //         <div className="slider-controler">
        //             <div className="swiper-button-prev slider-arrow">
        //                 <ion-icon name="arrow-back-outline"></ion-icon>
        //             </div>
        //             <div className="swiper-button-next slider-arrow">
        //                 <ion-icon name="arrow-forward-outline"></ion-icon>
        //             </div>
        //             <div className="swiper-pagination"></div>
        //         </div>
        //     </Swiper>
        // </div>
    );
};

export default TestimonialSlider;