import React from "react";
import Header from "./components/layout/Header";
import Herobanner from "./components/widget/Herobanner";
import ClientCarousel from "./components/widget/ClientCarousel";
import OurServices from "./components/widget/OurServices";
import About from "./components/widget/About";
import Portfolio from "./components/widget/Portfolio";
import TickerBar from "./components/widget/TickerBar";
import OurSuccess from "./components/widget/OurSuccess";
import ClientReviews from "./components/widget/ClientReviews";
import ScrollUp from "./components/shared/ScrollUp";
import Footer from "./components/layout/Footer";
import TeamMember from "./components/widget/TeamMember";
import PublicBanner from "./components/shared/PublicBanner";

const App = () => {
  return (
    <div className="main">
      <ScrollUp />
      <Header />
      <Herobanner />
      <ClientCarousel />
      <OurServices />
      <About />
      <Portfolio />
      <TickerBar />
      <OurSuccess />
      <ClientReviews />
      <PublicBanner/>
      <TeamMember/>
      <Footer/>
    </div>
  );
};

export default App;
