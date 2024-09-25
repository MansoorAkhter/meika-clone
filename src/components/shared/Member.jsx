import React from "react";
import { ICON } from "../../assets";
import { IoPersonOutline } from "react-icons/io5";
import AnimatedButton from "./AnimatedButton";
const Member = () => {
  return (
    <div className="grid w-full h-52 grid-cols-6 border-b border-[#aaa2] group place-items-start place-content-center pl-4">
      <div className="content-center h-full">
        <div className="content-center w-20 h-20 text-center text-white duration-500 bg-lightGray group-hover:bg-secondary">
          21 Aug <br /> 2024
        </div>
      </div>
      <div className="content-center w-1/2 h-2/2">
        <img
          src={ICON.member}
          alt="avatar"
          className="w-full h-full cursor-pointer"
        />
      </div>
      <div className="content-center w-full col-span-2 pr-5">
        <h5 className="text-mainGray">Web Design</h5>
        <p className="text-2xl font-bold text-white cursor-pointer group-hover:underline">
          In-house vs Agency Marketing Four Things to Consider
        </p>
      </div>
      <div className="flex items-center content-center h-full gap-2 text-mainGray">
        <IoPersonOutline size={20} />
        <span className="">Mansoor Akhter</span>
      </div>
      <div className="content-center h-full">
        <AnimatedButton border={true} />
      </div>
    </div>
  );
};

export default Member;
