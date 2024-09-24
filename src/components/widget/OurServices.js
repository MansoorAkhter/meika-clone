import React from "react";
import Wrapper from "../shared/Wrapper";
import { ICON } from "../../assets";
import Service from "../shared/Service";
import { serviceData } from "../../utils/TextData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const OurServices = () => {
  return (
    <div className="h-screen bg-primary">
      <Wrapper>
        <div className="flex flex-col items-center justify-center mt-20 gap-y-7">
          <img src={ICON.textLogo} alt="text logo" />
          <h1 className="text-6xl font-bold text-white">Our Best Services</h1>

          <p className="leading-normal text-[15px] text-mainGray text-center max-w-[65%]">
            Praesent ut orci sodales, cursus mauris at, fringilla mi. Quisque
            feugiat, libero vel pulvinar accumsan, mauris nulla malesuada dolor,
            at varius mauris magna nec felis. In congue elit ligula.
          </p>
        </div>

        <div className="px-9 mt-14 md:px-0">
          <Swiper
            slidesPerView={4}
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '@1.00': {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              '@1.50': {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {serviceData.map((item, index) => (
              <SwiperSlide key={index}>
                <Service
                  title={item?.title}
                  desc={item?.desc}
                  icon={item?.icon}
                  iconHover={item?.hoverIcon}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Wrapper>
    </div>
  );
};

export default OurServices;
