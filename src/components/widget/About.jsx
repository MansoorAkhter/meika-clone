import { ICON } from "../../assets";
import Wrapper from "../shared/Wrapper";
import AnimatedButton from "../shared/AnimatedButton";
import { IoMdPlay } from "react-icons/io";
import HalfSectionHeader from "../shared/HalfSectionHeader";

const About = () => {
  return (
    <div className="mt-20 md:mt-0 bg-yellow-50">
      <div
        style={{
          backgroundImage: `url(${ICON.aboutBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          // height: "100vh",
          // zIndex: -0,
        }}

      >
        <Wrapper>
          <div className="grid grid-cols-1 md:h-screen md:grid-cols-2 gap-y-10 md:gap-y-0">
            {/* left */}
            <div className="h-full px-7 md:px-0 place-items-center place-content-center">
              <img
                src={ICON.aboutposter}
                alt="about poster"
                className="w-auto h-auto"
              />
            </div>

            {/* right */}
            <div className="pb-20 md:pb-0 md:h-full px-7 place-items-center place-content-center bg-bgGray md:bg-transparent">
              <HalfSectionHeader
                title="About Us Meika"
                tagLine="We Provide You Best Experience"
              />
              <div className="my-8 md:my-5">
                <p className="text-lg font-semibold text-mainGray">
                  Sed feugiat feugiat felis. Curabitur posuere tristique mauris
                  non blandit. Sed consectetur venenatis enim vitae vestibulum.
                </p>
                <hr className="my-5 border-[#aaa2]" />
                <p className="text-mainGray">
                  Mauris ut enim sit amet lacus ornare ullamcorper. Praesent
                  placerat neque eu purus rhoncus, vel tincidunt odio ultrices.
                  Sed feugiat feugiat felis. Curabitur posuere tristique mauris
                  non blandit.
                </p>
              </div>

              <div className="grid grid-cols-2 px-2 md:px-0 gap-x-6">
                <AboutComponent num="01" head="We’re Serving Years" />
                <AboutComponent num="02" head="The Marketing Solution" />
              </div>

              <div className="flex md:mt-6 gap-x-4">
                <AnimatedButton border={true} h={56} bgc isAnimated/>
                <button className="flex items-center justify-center border w-14 h-14 text-secondary border-secondary">
                  <IoMdPlay size={20} className="text-secondary" />
                </button>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default About;

const AboutComponent = ({ num, head, desc }) => (
  <div className="grid grid-rows-2 h-[65%] md:h-36">

    <div className="grid md:grid-cols-7 md:place-content-center">
      <div className="w-[50px] h-[50px] col-span-2 text-lg font-bold text-center text-white border-[3px] place-content-center rounded-full border-secondary">
        {num}
      </div>
      <div className="hidden col-span-5 text-2xl font-bold text-white md:flex">
        {head}
      </div>
    </div>

    <div className="md:leading-relaxed md:mt-2 text-mainGray">
      Purus vel tincidunt odio ultrices. Sed feugiat feugiat felis. Fusce et
      nulla.
    </div>
  </div>
);
