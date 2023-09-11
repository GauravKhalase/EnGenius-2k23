import React from "react";

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-[#4327a3] to-[#dd117f]">
      <div className="max-w-[80%] flex flex-col justify-center items-center mx-auto pt-8 pb-10 gap-6">
        <div className="flex flex-row justify-center item-center text-white tex gap-10">
          <div className="flex flex-col justify-center items-center text-[12px]">
            <div className="font-bold">MAIL</div>
            <a>mahajan.hitesh3404gmail.com</a>
            <a>ashishviveksingh@gmail.com</a>
          </div>
          <div className="flex flex-col justify-center items-center text-[12px]">
            <div className="font-bold">CONTACT NO.</div>
            <div>+91 90283 80245</div>
            <div>+91 86691 15801</div>
          </div>
        </div>
        <div className="w-[100%] h-[1px] mx-auto bg-gray-200"></div>
        <div className=" flex flex-col justify-center items-center text-white gap-2">
          <div className="text-[20px]  font-semibold tracking-wider uppercase ">
            Credits <span className="text-[12px]">to</span>
          </div>
          <div className="flex flex-row justify-center items-center gap-2">
            <div className="tracking-wide ">Diksha Mahajan</div>
            <div>&</div>
            <div className="tracking-wide">Gaurav Khalase</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
