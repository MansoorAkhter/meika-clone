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
        width: "50%",
        height: "40vh",
        zIndex: -0,
      }}
      className="grid grid-rows-3 p-5"
    >
      <div className="flex items-center gap-4">
        <div className="w-24 h-24 rounded-full">
          <img src={ICON.avatar1} alt="avatar" />
        </div>
        <div>
          <h1 className="mb-1 text-xl font-bold text-white">
            IT. Isabella Theodore
          </h1>
          <img src={ICON.stars} alt="review stars" />
        </div>
      </div>
      <div className="text-2xl leading-normal tracking-wide text-mainGray">
        Nam ultricies sed leo eget vehi. Sed variunoni magna quistoli mats. Inte
        tempus semper leoli rokomoni our has been lecto.
      </div>
      <div className="">
        <img src={ICON.clientLogo1} alt="client logo" />
        <img src={ICON.clientLogo1} alt="client logo" />
      </div>
    </div>
  );
};

export default ClientReview;
