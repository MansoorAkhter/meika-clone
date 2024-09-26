import React from "react";
import { FaArrowTurnUp } from "react-icons/fa6";

const ScrollUp = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={scrollToTop}
      className="fixed z-50 px-3 py-3 text-xl text-black rounded-full cursor-pointer bottom-10 right-5 md:right-10 bg-secondary"
    >
      <FaArrowTurnUp />
    </button>
  );
};

export default ScrollUp;
