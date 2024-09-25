import React from "react";
import Wrapper from "../shared/Wrapper";
import SectionHeader from "../shared/SectionHeader";
import Member from "../shared/Member";

const TeamMember = () => {
  return (
    <section className="flex justify-center w-full pb-36">
      <Wrapper>
        <div className="flex flex-col items-center w-full gap-5">
          <SectionHeader heading="Special Team Member" />
          <Member />
          <Member />
          <Member />
        </div>
      </Wrapper>
    </section>
  );
};

export default TeamMember;
