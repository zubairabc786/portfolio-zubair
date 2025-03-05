import React from "react";
import { FaMap, FaPhone, FaVoicemail } from "react-icons/fa";
import { contactData } from "../../../data/data";
import { AiOutlineMail } from "react-icons/ai";

const ContactInfor = () => {
  return (
    <div className="">
      <div className="flex items-center space-x-8 ">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900  flex items-center justify-center flex-col ">
          <FaPhone className="w-4 h-4 md:w-7 md:h-7 text-white  " />
        </div>
        <div>
          <h1 className="text-lg md:text-xl text-white font-bold  ">Phone</h1>
          <h1 className="text-base sm:text-lg text-white text-opacity-70 ">
            {contactData.phone}
          </h1>
        </div>
      </div>
      {/* Second */}
      <div className="flex items-center space-x-8 mt-8 mb-8  ">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900  flex items-center justify-center flex-col ">
          <AiOutlineMail className="w-4 h-4 md:w-7 md:h-7 text-white  " />
        </div>
        <div>
          <h1 className="text-lg md:text-xl text-white font-bold  ">
            Email Address
          </h1>
          <h1 className="text-base sm:text-lg text-white text-opacity-70 ">
            {contactData.email}
          </h1>
        </div>
      </div>
      {/* Third */}
      <div className="flex items-center space-x-8 ">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900  flex items-center justify-center flex-col ">
          <FaMap className="w-4 h-4 md:w-7 md:h-7 text-white  " />
        </div>
        <div>
          <h1 className="text-lg md:text-xl text-white font-bold  ">Address</h1>
          <h1 className="text-base sm:text-lg text-white text-opacity-70 ">
            {contactData.address}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactInfor;
