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
          height: "67vh",
          zIndex: -0,
        }}
        className="flex justify-center"
      >
        {/* Footer Sections */}
        <div className="flex items-center">

        <div className="grid w-full max-w-screen-xl md:grid-cols-10">
          <div className="grid col-span-4 grid-rows-3 place-items-center">
            <div className="w-full row-span-1 mb-20">
              <img
                href="/"
                src={ICON.logo}
                alt="Logo"
                className="w-[17rem]  h-[3.2rem]"
              />
            </div>
            <div className="row-span-2">
              <h5 className="text-sm font-semibold tracking-[0.3em] uppercase text-mainGray mb-5">
                get contact
              </h5>

              <div className="h-16 w-[82%] border-b border-[#aaa3] flex items-center gap-x-8  mb-8">
                <div className="ml-4">
                  <img src={ICON.email} alt="email" />
                </div>
                <input
                  type="text"
                  placeholder="info.meika@gmail.com"
                  className="w-full h-full text-3xl font-bold bg-transparent outline-none placeholder:text-[#aaa3] text-mainGray"
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
            <div key={index} className="flex flex-col items-start justify-start col-span-2 gap-y-5">
              <h2 className="mb-2 text-lg font-bold text-white">{item?.title}</h2>
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
        <div className="flex items-center justify-between h-full max-w-screen-xl mx-auto">
          <p className="text-white">
            Copyright © 2023 <span className="text-secondary">Zucbedesign</span>
            . All rights reserved.
          </p>
          <img src={ICON.cpLogo} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Footer;
