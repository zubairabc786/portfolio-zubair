"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
// import { navLinks } from '@/app/constant/constant';
import { navLinks } from "../../../constant/constant";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = ({ openNav }) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`fixed ${
        navBg ? "bg-[#240b39]" : "fixed"
      } h-[12vh] z-[10]  w-full transition-all duration-200`}
    >
      <div className="flex items-center justify-between w-[95%] sm:w-[90%] xl:w-[80%] h-full mx-auto">
        {/* {logo} */}
        <Image
          src="/images/logo9.png"
          alt="Logo"
          width={170}
          height={170}
          className="rounded-lg "
        />
        {/* Nav Links */}
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              return (
                <Link key={link.id} href={link.url}>
                  <p className="nav_link">{link.label}</p>
                </Link>
              );
            })}
          </div>
          {/* button */}
          <div className="flex items-center space-x-4">
            <button className="md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
              Hire Me
            </button>
            {/*burger*/}
            <GiHamburgerMenu
              onClick={openNav}
              className="w-8 h-8 cursor-pointer text-white lg:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
