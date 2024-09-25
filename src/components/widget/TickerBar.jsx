const TickerBar = () => {
  const tickerData = [
    "Digital Products",
    "Marketing Strategy",
    "Apps",
    "Branding",
    "Photography",
    "Digital Products",
    "Apps",
    "Branding",
    "Photography",
  ];
  return (
    <div className="relative w-full h-20 bg-[#aaa2] my-10 md:my-20 overflow-x-clip">
      <div className="absolute flex items-center w-full h-full z-40 rotate-[-4deg] bg-[#181818] left-0 ">
        <div className="flex flex-shrink-0 w-auto h-full justify-evenly gap-x-6 md:gap-20 animate-slide-rotate">
          {tickerData?.map((ticker, index) => (
            <div
              className={`text-3xl flex items-center gap-2`}
              key={`repeat-${index}`}
            >
              <span
                className={`${
                  index === 2 ? "text-secondary" : "text-[#aaa4]"
                } text-5xl mt-4 font-light`}
              >
                *
              </span>
              <span
                className={`font-semibold tracking-wider ${
                  index === 1
                    ? "text-white"
                    : index === 2
                    ? "text-secondary"
                    : index === 3
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


