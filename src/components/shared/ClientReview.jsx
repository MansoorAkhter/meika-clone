import React from "react";
import { ICON } from "../../assets";

const ClientReview = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${ICON.reviewBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "40vh",
        zIndex: -0,
      }}

      
      className="grid grid-rows-3 px-5 py-8 md:px-10"
    >
      {/* 1 */}
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 md:w-[85px] md:h-[85px] rounded-full">
          <img src={ICON.avatar1} alt="avatar" className="w-full h-full" />
        </div>
        <div>
          <h1 className="mb-1 font-bold text-white md:text-xl">
            IT. Isabella Theodore
          </h1>
          <img src={ICON.stars} alt="review stars" />
        </div>
      </div>
      
      {/* 2 */}
      <div className="mt-3 text-sm tracking-wide md:leading-snug md:text-2xl text-mainGray place-content-center">
        Nam ultricies sed leo eget vehi. Sed variunoni magna quistoli mats. Inte
        tempus semper leoli rokomoni our has been lecto.
      </div>

      {/* 3 */}
      <div className="flex items-center justify-between w-full gap-x-4 md:gap-x-8">
        <img src={ICON.clientLogo1} alt="client logo" className="w-32 h-6" />
        <div className="h-[0.5px] w-full bg-[#aaa3]" />
        <img src={ICON.qtIcon} alt="qt" className="w-12 h-12" />
      </div>
    </div>
  );
};

export default ClientReview;
