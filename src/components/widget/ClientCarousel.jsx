import { clientsData } from "../../utils/TextData";
import Wrapper from "../shared/Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../../index.css";

import { Pagination } from "swiper/modules";

const ClientCarousel = () => {
  return (
    <Wrapper>
      <div className="flex items-center justify-center w-full h-32 px-4 mt-24 md:mt-28 md:px-0">
        <Swiper
          slidesPerView={4}
          breakpoints={{
            '@0.00': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {clientsData.map((item, index) => (
            <SwiperSlide key={index} >
              <img src={item} alt="logo" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default ClientCarousel;
