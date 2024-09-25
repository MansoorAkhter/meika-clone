import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const AnimatedButton = ({
  title = "Read More",
  border = false,
  bgc = "#a5a5a511",
  isAnimated = false,
  h = 35,
}) => {
  return (
    <button
      style={{ backgroundColor: bgc, height: h }}
      className={`relative flex items-center justify-center group gap-3 px-4 text-sm font-medium ${
        border ? "border border-[#aaa2]" : bgc
      } text-white`}
    >
      {title} <GoArrowUpRight color="#fff" className="text-[18px]" />
      <div
        className="absolute inset-0 top-0 right-0 w-0 h-full transition-all duration-300 -z-0 bg-secondary hover:w-full"
      ></div>
    </button>
  );
};

export default AnimatedButton;
