import { ICON } from "../../assets";
import { IoPersonOutline } from "react-icons/io5";
import AnimatedButton from "./AnimatedButton";

const Member = () => {
  return (
    <div className="grid w-full md:h-52 grid-cols-1 gap-y-7 md:grid-cols-6 border-b border-[#aaa2] group md:place-items-start place-items-center md:place-content-center md:pl-4 pb-14 mt-10 md:mt-0 md:pb-3">
      <div className="content-center h-full">
        <div className="content-center w-20 h-20 text-center text-white duration-500 bg-lightGray group-hover:bg-secondary">
          21 Aug <br /> 2024
        </div>
      </div>
      <div className="content-center w-28 h-28 md:w-[55%] md:h-full">
        <img
          src={ICON.member}
          alt="avatar"
          className="w-full h-full cursor-pointer"
        />
      </div>
      <div className="content-center w-full px-4 text-center md:px-0 md:pr-5 md:col-span-2 md:text-left">
        <h5 className="mb-1 text-mainGray">Web Design</h5>
        <p className="text-2xl font-bold leading-relaxed text-white cursor-pointer group-hover:underline">
          In-house vs Agency Marketing Four Things to Consider
        </p>
      </div>
      <div className="flex items-center content-center h-full gap-2 text-mainGray">
        <IoPersonOutline size={20} />
        <span className="">Mansoor Akhter</span>
      </div>
      <div className="relative content-center h-full">
        <div className="relative">
          <AnimatedButton border={true} isAnimated={true} h={55} bgc />
        </div>
      </div>
    </div>
  );
};

export default Member;
