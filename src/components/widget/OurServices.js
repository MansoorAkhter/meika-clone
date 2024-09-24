import React from "react";
import Wrapper from "../shared/Wrapper";
import { ICON } from "../../assets";
import Service from "../shared/Service";
import { serviceData } from "../../utils/TextData";

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

        <div className="flex items-center justify-between gap-5 mt-14">
          {serviceData.map((item, index) => (
            <Service
              key={index}
              title={item?.title}
              desc={item?.desc}
              icon={item?.icon}
              iconHover={item?.hoverIcon}
            />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default OurServices;
