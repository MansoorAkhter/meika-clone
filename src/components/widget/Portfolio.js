import Wrapper from "../shared/Wrapper";
import { portfolioData } from "../../utils/TextData";
import PortfolioCard from "../shared/PortfolioCard";
import PortfolioSelector from "./PortfolioSelector";
import SectionHeader from "../shared/SectionHeader";

const Portfolio = () => {
  return (
    <div className="pb-20 mt-10 md:pb-10 md:mt-20">
      <Wrapper>
          <SectionHeader heading="Newest Portfolio" />
          <PortfolioSelector />
        {/* <div className="flex flex-col items-center justify-center gap-y-7"> */}
          <div className="grid w-full grid-cols-1 gap-5 md:gap-8 px-7 md:grid-cols-2">
            {portfolioData.slice(0, -1).map((item, index) => (
              <PortfolioCard
                key={index}
                title={item?.title}
                desc={item?.desc}
                img={item?.img}
              />
            ))}
          </div>
        {/* </div> */}
      </Wrapper>
    </div>
  );
};

export default Portfolio;
