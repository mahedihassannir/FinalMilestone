
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// here is importing the images

import swiper1 from '../../../assets/home/slide1.jpg'
import swiper2 from '../../../assets/home/slide2.jpg'
import swiper3 from '../../../assets/home/slide3.jpg'
import swiper4 from '../../../assets/home/slide4.jpg'
import swiper5 from '../../../assets/home/slide5.jpg'


const SwiperSliderMahedi = () => {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>

                    <img src={swiper1} alt="" />
                    

                </SwiperSlide>
                <SwiperSlide>

                <img src={swiper2} alt="" />


                </SwiperSlide>
                <SwiperSlide>

                <img src={swiper3} alt="" />


                </SwiperSlide>
                <SwiperSlide>


                <img src={swiper4} alt="" />

                </SwiperSlide>
                <SwiperSlide>
                <img src={swiper5} alt="" />



                </SwiperSlide>
                <SwiperSlide>
                <img src={swiper1} alt="" />




                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default SwiperSliderMahedi;