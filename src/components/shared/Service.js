import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import AnimatedButton from "./AnimatedButton";

const Service = ({ icon, iconHover, title, desc }) => {
  return (
    <div className="grid group grid-rows-11 h-[455px] border w-[25%] border-mainGray p-8">
      <div className="relative w-auto h-auto row-span-4">
        <img
          src={icon}
          alt="icon"
          className="w-auto h-24 group-hover:hidden "
        />
        <img
          src={iconHover}
          alt="iconHover"
          className="absolute inset-0 hidden w-auto h-24 group-hover:block "
        />
      </div>

      <div className="row-span-4">
        <h1 className="text-3xl font-bold text-white duration-300 cursor-pointer hover:text-secondary">
          {title}
        </h1>
        <p className="text-sm leading-[1.8] text-mainGray mt-4">{desc}</p>
      </div>

      <div className="row-span-6 place-items- place-content-center">
        <AnimatedButton />
      </div>
    </div>
  );
};

export default Service;
