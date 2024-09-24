import { useState } from "react";
import { porfolioData } from "../../utils/TextData";
import CustomButton from "../shared/CustomButton";

const PortfolioSelector = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState(0);
  return (
    <div className="flex items-center justify-center gap-3 mt-4 mb-6">
      {porfolioData?.map((item, index) => (
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
