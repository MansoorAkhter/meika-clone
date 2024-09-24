import { useState } from "react";

const CustomButton = ({ title, onClick, selected }) => {
  const [isActive, setisActive] = useState(0);
  const handleActive = (prop) => {
    setisActive(prop);
    onClick(onClick);
  };

  console.log( isActive);
  return (
    <button
      onClick={() => handleActive(selected)}
      className={`py-[5px] px-3.5 text-[#aaa8] hover:text-white hover:bg-secondary  font-light border border-[#aaa2] cursor-pointer transition-all duration-300`}
    >
      {title}
    </button>
  );
};

export default CustomButton;
