import React from "react";

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-[#4327a3] to-[#dd117f]">
      <div className="max-w-[80%] flex flex-col justify-center items-center mx-auto py-10">
        <div className="flex flex-row justify-center item-center text-white tex gap-10">
          <div className="flex flex-col justify-center items-center text-[12px]">
            <div className="font-bold">MAIL</div>
            <div>mahajan.hitesh3404gmail.com</div>
            <div>ashishviveksingh@gmail.com</div>
          </div>
          <div className="flex flex-col justify-center items-center text-[12px]">
            <div className="font-bold">CONTACT NO.</div>
            <div>+91 90283 80245</div>
            <div>+91 8669115801</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
