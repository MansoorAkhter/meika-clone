import Wrapper from "../shared/Wrapper";
import SectionHeader from "../shared/SectionHeader";
import ClientReview from "../shared/ClientReview";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ClientReviews = () => {
  return (
    <section className="flex justify-center w-full md:h-screen">
      <Wrapper>
        <div className="flex flex-col items-center gap-5">
          <SectionHeader heading="What client Says?" />
        </div>

        <div className="flex flex-col items-center gap-8 mt-14">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="mySwiper"
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              '@0.75': {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              '@1.00': {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              '@1.50': {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <ClientReview />
            </SwiperSlide>
            <SwiperSlide>
              <ClientReview />
            </SwiperSlide>
            <SwiperSlide>
              <ClientReview />
            </SwiperSlide>
            <SwiperSlide>
              <ClientReview />
            </SwiperSlide>
          </Swiper>
        </div>
      </Wrapper>
    </section>
  );
};

export default ClientReviews;
