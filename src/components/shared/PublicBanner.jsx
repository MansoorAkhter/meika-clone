import React from "react";
import { ICON } from "../../assets";
import Wrapper from "./Wrapper";
import AnimatedButton from "./AnimatedButton";

const PublicBanner = () => {
  return (
    <div className="relative mx-auto md:max-w-screen-xl h-[360px] md:h-auto">
      <img src={ICON.bannerBg} alt="banner" className="object-cover h-full" />
      <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full px-4 md:flex-row md:justify-between gap-y-14">
        <div className="text-[33px] font-bold text-left text-white md:w-3/5 md:px-12 md:text-6xl">
          Get Started and grow your business now.
        </div>

        <div className="flex items-end justify-end w-full md:justify-center md:items-center md:w-2/5">
          <AnimatedButton
            title="Get Started For Free"
            bgc="#000"
            isAnimated={true}
            h={65}
          />
        </div>
      </div>
    </div>
  );
};

export default PublicBanner;
