import { GoArrowUpRight } from "react-icons/go";
import { ICON } from "../../assets";

const Herobanner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${ICON.heroBg})`,
        // backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        zIndex: -0,
      }}
      className="grid grid-rows-3 py-8 md:px-10"
    >
      <div className="absolute top-40 md:top-48 md:left-64 w-full md:w-[40%] px-5 md:px-0">
        <h2 className="font-bold md:leading-[6rem] text-white text-4xl md:text-[80px]">
          Smooth and grow your business.
        </h2>

        <div className="flex flex-col items-end w-full mt-7 md:gap-7">
          <p className="leading-relaxed md:w-[85%] text-mainGray">
            Nulla lobortis orci vel rutrum cursus. Curabitur at hendrerit
            libero. Curabitur bibendum eros nec augue egestas facilisis. Duis
            sit amet aliquet arcu, sit amet fermentum lectus.
          </p>

          <div className="flex items-center w-full md:w-[85%] gap-3 mt-7 md:mt-0 md:gap-6 cursor-pointer text-white hover:text-secondary">
            <div className="h-[1px] w-2/6 md:w-[38%] bg-secondary" />
            <h2 className="text-sm font-bold duration-300 md:text-base">
              Discover Now
            </h2>
            <GoArrowUpRight color="#DF2919" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herobanner;
