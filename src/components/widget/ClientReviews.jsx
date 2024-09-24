import Wrapper from "../shared/Wrapper";
import SectionHeader from "../shared/SectionHeader";
import ClientReview from "../shared/ClientReview";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ClientReviews = () => {
  return (
    <section className="flex justify-center w-full h-screen">
      <Wrapper>
        <div className="flex flex-col items-center gap-5">
          <SectionHeader heading="What client Says?" />
        </div>

        <div className="flex items-center gap-8 mt-14">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
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
