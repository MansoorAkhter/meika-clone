import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import toggleMenu from "../../assets/toggle-menu.png";
import { menuData } from "../../utils/TextData";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const TOP_OFFSET = 50;
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex md:justify-center items-center sticky z-50 h-auto inset-0 p-3 border-b border-[#aaa2] transition-colors ${
        // showBackground ? "backdrop-blur-xl" : ""
        showBackground ? "bg-primary" : ""
      }`}
    >
      <div className="hidden md:flex items-center justify-between w-[90%]">
        {/* Logo */}
        <img href="/" src={logo} alt="Logo" className="w-[12rem]  h-[2.3rem]" />

        {/* Menu */}
        <ul className="flex font-semibold text-white space-x-14">
          {menuData.map((nav, index) => (
            <li
              key={index}
              className="flex items-center duration-200 cursor-pointer hover:text-secondary gap-x-1"
            >
              {nav.pageName}
            </li>
          ))}
        </ul>

        <div className="grid h-12 grid-cols-2 grid-rows-2 gap-1 text-base font-bold text-gray-500 w-14">
          <a className="duration-200 cursor-pointer hover:text-secondary">
            Fb.
          </a>
          <a className="duration-200 cursor-pointer hover:text-secondary">
            Ln.
          </a>
          <a className="duration-200 cursor-pointer hover:text-secondary">
            Tw.
          </a>
          <a className="duration-200 cursor-pointer hover:text-secondary">
            Be.
          </a>
        </div>

        {/* Call Us */}
        <p className="text-sm font-semibold leading-relaxed text-white solid-Btn flex-all-center">
          Best Solution ForBusiness <br /> Consulting Service
        </p>
        <p className="text-sm font-semibold leading-relaxed text-white solid-Btn flex-all-center">
          P: +99 88 55 666 000 <br />
          E: Info.Meika@Gmail.com
        </p>

        <img
          href="/"
          src={toggleMenu}
          alt="toggleMenu"
          className="w-[2rem] h-w-[2rem] cursor-pointer"
        />
      </div>

      <div className="flex justify-between w-full py-2 md:hidden">
        <img href="/" src={logo} alt="Logo" className="w-[9rem]  h-[1.8rem]" />

        <div className="flex items-center justify-center w-10 border border-white h-9">
          <GiHamburgerMenu color="#fff" size={24}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
