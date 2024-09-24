import AnimatedButton from "./AnimatedButton";
import { ICON } from "../../assets";

const Service = ({ icon, iconHover, title, desc }) => {
  return (
    <div className="relative overflow-hidden grid group grid-rows-11 h-[455px] border w-full border-[#aaa2] p-8">
      {/* Pattern appear will on hover */}
      <img
        src={ICON.patternbg}
        alt="iconHover"
        className="absolute -bottom-10 group-hover:bottom-0 -right-[145px] group-hover:right-0 transition-all duration-700 w-full h-[80%]"
      />


      <div className="relative w-auto h-auto row-span-4">
        <img
          src={icon}
          alt="icon"
          className="w-auto h-24 group-hover:hidden"
        />
        <img
          src={iconHover}
          alt="iconHover"
          className="absolute inset-0 hidden w-auto h-24 -z-10 group-hover:block"
        />
      </div>

      <div className="row-span-5">
        <h1 className="text-3xl font-bold text-white duration-300 cursor-pointer group-hover:text-secondary">
          {title}
        </h1>
        <p className="text-[15px] tracking-[0.018em] leading-[1.9] text-mainGray mt-6">{desc}</p>
      </div>

      <div className="row-span-2 place-content-center">
        <AnimatedButton />
      </div>
    </div>
  );
};

export default Service;
