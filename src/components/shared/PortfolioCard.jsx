import { GoArrowUpRight } from "react-icons/go";

const PortfolioCard = ({ title, desc, img, selected }) => {
  return (
    <div className="relative w-full h-[35vh] md:h-[50vh] flex justify-center">
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
        zIndex: -0,
      }}
      className="flex items-center justify-center"
    >
      <div className="w-[88%] h-[86%] relative overflow-hidden group">
        <div className="absolute w-full h-full bg-[#0008] flex flex-col justify-center items-center gap-1 md:gap-3 cursor-default -top-3 group-hover:top-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ">
          <h1 className="text-sm text-mainGray md:text-base">{title}</h1>
          <h2 className="text-xl font-bold text-white md:text-4xl">{desc}</h2>
          <GoArrowUpRight
            color="#DF2919"
     
            className="cursor-pointer text-[35px] md:text-[55px]"
          />
        </div>
      </div>
    </div>
  </div>
  );
};

export default PortfolioCard;
