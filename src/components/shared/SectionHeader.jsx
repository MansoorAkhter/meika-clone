import { ICON } from "../../assets";

const SectionHeader = ({heading}) => {
  return (
    <div className="flex flex-col items-center justify-center px-4 mt-10 md:mt-20 gap-y-6 md:gap-y-8 md:px-0">
      <img src={ICON.textLogo} alt="meika logo" className="h-8 w-14" />
      <h1 className="font-bold text-white text-3xl sm:text-4xl md:text-[64px] text-center">{heading}</h1>
      <p className="leading-relaxed text-[15px] text-mainGray text-center md:max-w-[65%]">
        Praesent ut orci sodales, cursus mauris at, fringilla mi. Quisque
        feugiat, libero vel pulvinar accumsan, mauris nulla malesuada dolor, at
        varius mauris magna nec felis. In congue elit ligula.
      </p>
    </div>
  );
};

export default SectionHeader;
