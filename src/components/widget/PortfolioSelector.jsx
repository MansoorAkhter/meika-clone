import { useState } from "react";
import { portfolioData } from "../../utils/TextData";
import CustomButton from "../shared/CustomButton";

const PortfolioSelector = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState(0);
  return (
    <div className="flex items-center gap-3 px-4 pb-2 my-5 overflow-x-auto overflow-y-hidden md:mx-0 mx-7 md:my-14 md:px-0 md:justify-center">
      {portfolioData?.map((item, index) => (
        <CustomButton
          key={index}
          selected={index}
          title={item?.title}
          onClick={(p) => setSelectedPortfolio(p)}
        />
      ))}
    </div>
  );
};

export default PortfolioSelector;
