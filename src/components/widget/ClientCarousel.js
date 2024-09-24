import React from "react";
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
      <div className="flex items-center w-full h-32 mt-10">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          // pagination={{
          //   clickable: true,
          // }}
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
