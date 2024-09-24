import React from "react";

const TickerBar = () => {
  const tickerData = [
    "Digital Products",
    "Marketing Strategy",
    "Apps",
    "Branding",
    "Photography",
     ];
  return (
    <div className="relative w-auto h-20 bg-[#aaa2] my-20">
      <div className="absolute flex items-center w-full h-full rotate-[-4deg] bg-[#181818]">
        <div className="flex items-center justify-between w-full h-full overflow-hidden animate-slide-rotate">
          {tickerData?.map((ticker, index) => (
            <div
              className={`text-3xl flex items-center gap-2`}
              key={`repeat-${index}`}
            >
              <span
                className={`${
                  index === 1 ? "text-secondary" : "text-[#aaa4]"
                } text-5xl mt-4 font-light`}
              >
                *
              </span>
              <span
                className={`font-semibold ${
                  index === 0
                    ? "text-white"
                    : index === 1
                    ? "text-secondary"
                    : index === 2
                    ? "text-[#aaa4]"
                    : "text-stroke-3"
                }`}
              >
                {ticker}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TickerBar;
