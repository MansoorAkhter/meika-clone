import React from "react";
import Wrapper from "../shared/Wrapper";
import SectionHeader from "../shared/SectionHeader";
import ClientReview from "../shared/ClientReview";

const ClientReviews = () => {
  return (
    <section className="flex justify-center w-full h-screen">
      <Wrapper>
        <div className="flex flex-col items-center gap-5">
          <SectionHeader heading="What client Says?" />
        </div>

        <div className="flex items-center gap-8 mt-14">
          <ClientReview />
          <ClientReview />
        </div>
      </Wrapper>
    </section>
  );
};

export default ClientReviews;
