import React from "react";
import Wrapper from "../shared/Wrapper";
import { ICON } from "../../assets";
import Service from "../shared/Service";
import { serviceData } from "../../utils/TextData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SectionHeader from "../shared/SectionHeader";

const OurServices = () => {
  return (
    <div className="md:h-screen bg-primary">
      <Wrapper>
        <SectionHeader heading="Our Best Services" />

        <div className="px-5 mt-12 md:mt-14 md:px-0">
          <Swiper
            slidesPerView={4}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
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
