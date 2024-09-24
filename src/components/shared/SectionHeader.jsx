import { ICON } from "../../assets";

const SectionHeader = ({heading}) => {
  return (
    <>
      <img src={ICON.textLogo} alt="" className="h-8 w-14" />
      <h1 className="font-bold text-white text-[64px]">{heading}</h1>
      <p className="leading-normal text-[15px] text-mainGray text-center max-w-[65%]">
        Praesent ut orci sodales, cursus mauris at, fringilla mi. Quisque
        feugiat, libero vel pulvinar accumsan, mauris nulla malesuada dolor, at
        varius mauris magna nec felis. In congue elit ligula.
      </p>
    </>
  );
};

export default SectionHeader;
