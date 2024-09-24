import { useState } from "react";

const CustomButton = ({ title, onClick, selected }) => {
  const [isActive, setisActive] = useState(0);
  const handleActive = (prop) => {
    setisActive(prop);
    onClick(onClick);
  };

  return (
    <button
      onClick={() => handleActive(selected)}
      className={`py-[5px] flex-shrink-0 px-3.5 text-sm md:text-base text-[#aaa8] hover:text-white hover:bg-secondary font-light border border-[#aaa2] cursor-pointer transition-all duration-300`}
    >
      {title}
    </button>
  );
};

export default CustomButton;
