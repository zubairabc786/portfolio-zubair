import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <div>
        <Image
          src="/images/logo.png"
          alt="logo"
          width={180}
          height={180}
          className="mx-auto"
        />
      </div>
      <div className="flex items-center justify-center flex-wrap space-x-10 space-y-4 text-white font-bold ">
        <div>Home.</div>
        <div>Services.</div>
        <div>Project.</div>
        <div>Reviews.</div>
        <div>Contact.</div>
      </div>
      <p className="text-white text-opacity-60 mt-6 text-center">
        @ 2025 All Rights Reserved by WebDev Warrior{" "}
      </p>
    </div>
  );
};

export default Footer;
