// this component is used at [home, saaed pay] pages 

"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/pagination'; 
import { Autoplay, Pagination } from 'swiper/modules';


const Slider = ({data}) => {
    return (
    <>
            <Swiper
        breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 5, spaceBetween: 30 },
            }}
            slidesPerView={5}
            spaceBetween={30}
                freeMode={true}
                loop={true}
            pagination={{
            clickable: true,
                }}
            autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
            modules={[Autoplay, Pagination]}
            className="mySwiper my-5"
            >
                {
                    data.map((item, index) => (                
                        <SwiperSlide key={index}>
                            <Image src={item} alt="test" width={"auto"} height={"auto"} className="w-50 mb-5"/> 
                        </SwiperSlide>
                    ))
                }
       
        </Swiper>
    </>
  )
}

export default Slider
