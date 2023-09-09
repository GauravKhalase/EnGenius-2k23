import React from "react";

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-[#4327a3] to-[#dd117f]">
      <div className="max-w-[80%] flex flex-col justify-center items-center mx-auto py-10">
        <div className="flex flex-row justify-center item-center text-white tex gap-10">
          <div className="flex flex-col justify-center items-center text-[12px]">
            <div>MAIL</div>
            <div>abcd@gmail.com</div>
            <div>abcd@gmail.com</div>
          </div>
          <div className="flex flex-col justify-center items-center text-[12px]">
            <div>CONTACT NO.</div>
            <div>+91 01234 56789</div>
            <div>+91 01234 56789</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
