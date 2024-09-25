import React from "react";
import { ICON } from "../../assets";
import Wrapper from "./Wrapper";
import AnimatedButton from "./AnimatedButton";

const PublicBanner = () => {
  return (
    <Wrapper>
      <div className="relative">
        <img src={ICON.bannerBg} alt="banner" />
        <div className="absolute flex justify-between w-full top-24">
          <div className="w-3/5 px-16 text-6xl font-bold text-white">
            <h1>Get Started and grow your business now.</h1>
          </div>

          <div className="flex items-center justify-center w-2/5">
            <AnimatedButton />
          </div>
        </div>
        -
      </div>
    </Wrapper>
  );
};

export default PublicBanner;
