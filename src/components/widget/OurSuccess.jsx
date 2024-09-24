import React from "react";
import Wrapper from "../shared/Wrapper";
import { ICON } from "../../assets";
import { GoArrowUpRight } from "react-icons/go";
import HalfSectionHeader from "../shared/HalfSectionHeader";
import PercentageBar from "../shared/PercentageBar";
import AnimatedButton from "../shared/AnimatedButton";

const OurSuccess = () => {
  return (
    <section className="flex items-center w-full h-screen">
      <Wrapper>
        <div className="grid grid-cols-2 gap-10 place-items-center place-content-center">
          {/* Left */}
          <div className="relative">
            <div className="w-[35%] h-[35%] absolute top-28 right-1 p-4">
              <h5 className="text-lg font-semibold leading-tight text-white">
                How much faster is Connect.
              </h5>
              <a
                href="#"
                className="flex items-center gap-2 mt-2 transition-colors duration-300 text-mainGray hover:text-secondary"
              >
                Learn more <GoArrowUpRight size={18} />
              </a>
            </div>
            <img src={ICON.about4} />
          </div>

          {/* Right */}
          <div className="">
            <HalfSectionHeader
              title="What do We Do"
              tagLine="Grow your business with a creative agency."
              fns="text-[56px]"
            />
            <p className="mt-5 text-mainGray">
              Mauris ut enim sit amet lacus ornare ullamcorper. Praesent
              placerat neque eu purus rhoncus, vel tincidunt odio ultrices. Sed
              feugiat feugiat felis. Curabitur posuere tristique mauris non
              blandit.
            </p>

            <div className="flex justify-between mt-5 mb-10 gap-7">
              <PercentageBar />
              <PercentageBar />
            </div>

           <AnimatedButton bgc="#df2919" title="Discover More" h={60}/>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default OurSuccess;
