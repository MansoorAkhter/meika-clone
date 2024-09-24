import React from "react";
import heroBg from "../../assets/hero-bg.png";
import { GoArrowUpRight } from "react-icons/go";
const Herobanner = () => {
  return (
    <div className="w-full h-[40vh] md:h-screen">
      <img
        src={heroBg}
        alt="Hero bg"
        className="absolute top-0 object-cover w-full h-full"
      />

      <div className="absolute top-40 md:top-52 md:left-60 w-full md:w-[40%] px-5 md:px-0">
        <h2 className="font-bold md:leading-[6rem] text-white text-4xl md:text-[88px]">
          Smooth and grow your business.
        </h2>

        <div className="flex flex-col items-end justify-end w-full mt-7 md:gap-7">
          <p className="leading-normal md:w-[80%] text-[15px] text-mainGray">
            Nulla lobortis orci vel rutrum cursus. Curabitur at hendrerit
            libero. Curabitur bibendum eros nec augue egestas facilisis. Duis
            sit amet aliquet arcu, sit amet fermentum lectus.
          </p>

          <div className="flex items-center w-full md:w-[80%] gap-3 mt-7 md:mt-0 md:gap-6 cursor-pointer text-white hover:text-secondary">
            <div className="h-[1px] w-2/6 md:w-[55%] bg-secondary" />
            <h2 className="text-sm font-bold duration-300 md:text-base">Discover Now</h2>
            <GoArrowUpRight color="#DF2919" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herobanner;
