import React from "react";
import { ICON } from "../../assets";
import Wrapper from "../shared/Wrapper";
import AnimatedButton from "../shared/AnimatedButton";
import { IoMdPlay } from "react-icons/io";
import SectionHeader from "../shared/HalfSectionHeader";

const About = () => {
  return (
    <div className="relative w-full h-[40vh] md:h-screen">
      <div
        style={{
          backgroundImage: `url(${ICON.aboutBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
          zIndex: -0,
        }}
      >
        <Wrapper>
          <div className="grid h-screen grid-cols-2 ">
            {/* left */}
            <div className="h-full place-items-center place-content-center">
              <img src={ICON.aboutposter} alt="" className="w-auto h-auto" />
            </div>

            {/* right */}
            <div className="h-full place-items-center place-content-center">
              <SectionHeader title="About Us Meika" tagLine="We Provide You Best Experience"/>
              <div className="my-5">
                <p className="text-lg font-semibold text-mainGray">
                  Sed feugiat feugiat felis. Curabitur posuere tristique mauris
                  non blandit. Sed consectetur venenatis enim vitae vestibulum.
                </p>
                <hr className="my-5 border-[#aaa2]" />
                <p className="text-mainGray">
                  Mauris ut enim sit amet lacus ornare ullamcorper. Praesent
                  placerat neque eu purus rhoncus, vel tincidunt odio ultrices.
                  Sed feugiat feugiat felis. Curabitur posuere tristique mauris
                  non blandit.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-x-6">
                <div className="grid grid-rows-2 h-36">
                  <div className="grid grid-cols-7 place-content-center">
                    <div className="w-[50px] h-[50px] col-span-2 text-lg font-bold text-center text-white border-[3px] place-content-center rounded-full border-secondary">
                      01
                    </div>
                    <div className="col-span-5 text-2xl font-bold text-white">
                      We’re Serving Years
                    </div>
                  </div>
                  <div className="leading-relaxed text-mainGray place-content-center">
                    Purus vel tincidunt odio ultrices. Sed feugiat feugiat
                    felis. Fusce et nulla.
                  </div>
                </div>

                <div className="grid grid-rows-2 h-36">
                  <div className="grid grid-cols-7 place-content-center">
                    <div className="w-[50px] h-[50px] col-span-2 text-lg font-bold text-center text-white border-[3px] place-content-center rounded-full border-secondary">
                      02
                    </div>
                    <div className="col-span-5 text-2xl font-bold text-white">
                      The Marketing Solution
                    </div>
                  </div>
                  <div className="leading-relaxed text-mainGray place-content-center">
                    Purus vel tincidunt odio ultrices. Sed feugiat feugiat
                    felis. Fusce et nulla.
                  </div>
                </div>
              </div>

              <div className="flex mt-6 gap-x-4">
                <AnimatedButton border={true} h={56}/>
                <button className="flex items-center justify-center border w-14 h-14 text-secondary border-secondary">
                  <IoMdPlay size={20} className="text-secondary" />
                </button>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default About;
