import { useState } from "react";
import Wrapper from "../shared/Wrapper";
import { ICON } from "../../assets";
import { porfolioData } from "../../utils/TextData";
import PortfolioCard from "../shared/PortfolioCard";
import PortfolioSelector from "./PortfolioSelector";
import SectionHeader from "../shared/SectionHeader";

const Portfolio = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState(0);
  const handlePortfolio = () => {};
  console.log(selectedPortfolio);
  return (
    <div className="pb-10 bg-primary">
      <Wrapper>
        <div className="flex flex-col items-center justify-center mt-20 gap-y-7">
          <SectionHeader heading="Newest Portfolio"/>

          <PortfolioSelector />
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
            {porfolioData.map((item, index) => (
              <PortfolioCard
                key={index}
                title={item?.title}
                desc={item?.desc}
                img={item?.img}
                selected={selectedPortfolio}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Portfolio;
