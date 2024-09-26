import { ICON } from "../../assets";
import { footerData } from "../../utils/TextData";

const Footer = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${ICON.footerBg})`,
          //   backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          zIndex: -0,
        }}
        className="flex justify-center h-screen md:h-[67vh]"
      >
        {/* Footer Sections */}
        <div className="flex items-center">
          <div className="grid w-full max-w-screen-xl grid-cols-1 md:gap-20 md:grid-cols-10 px-7 md:px-0">
            <div className="grid col-span-4 grid-rows-3 mb-10 md:mb-0 place-items-center">
              <div className="w-full row-span-1 mb-20">
                <img
                  href="/"
                  src={ICON.logo}
                  alt="Logo"
                  className="h-6 w-28 md:w-[17rem] md:h-[3.2rem]"
                />
              </div>
              <div className="row-span-2">
                <h5 className="text-sm font-semibold tracking-[0.3em] uppercase text-mainGray mb-5">
                  get contact
                </h5>

                <div className="h-16 md:w-[88%] border-b border-[#aaa3] flex items-center gap-x-4 md:gap-x-7 mb-8">
                  <div className="ml-2 md:ml-4">
                    <img src={ICON.email} alt="email" />
                  </div>
                  <input
                    type="text"
                    placeholder="info.meika@gmail.com"
                    className="w-full h-full text-lg md:text-3xl font-bold bg-transparent outline-none placeholder:text-[#aaa3] text-mainGray"
                  />
                </div>

                <h6 className="text-mainGray">
                  <span className="text-secondary">P:</span>{" "}
                  <span className="font-light">+99 88 55 666 000</span>
                </h6>
                <h6 className="mt-1 text-mainGray">
                  <span className="text-secondary">L:</span>{" "}
                  <span className="font-light">
                    13 Road Mirpur Street, 600New York, USA
                  </span>
                </h6>
              </div>
            </div>

            {/*====Routes====*/}
            {footerData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col col-span-2 gap-y-5"
              >
                <h2 className="mb-2 text-lg font-bold text-white">
                  {item?.title}
                </h2>
                {item?.routeNames.map((routeName, routeIndex) => (
                  <a
                    key={routeIndex}
                    href="/"
                    className="leading-none text-[#aaa] duration-300 cursor-pointer hover:text-secondary"
                  >
                    {routeName}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom field */}
      <div className="w-full h-[90px] bg-[#aaa2]">
        <div className="relative flex flex-col items-center justify-between h-full max-w-screen-xl p-3 mx-auto md:flex-row">
          <p className="text-center text-white">
            Copyright © 2024 <span className="text-secondary">Meika Corporation</span>
            . All rights reserved.
          </p>
          <img src={ICON.cpLogo} alt="logo" className="absolute bottom-2 right-2 md:relative md:bottom-0 md:right-0" />
        </div>
      </div>
    </>
  );
};

export default Footer;
