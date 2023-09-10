import React from "react";

const Pass = () => {
  return (
    <div className="bg-[#f8f8f8]" id="pass">
      <div className="max-w-[80%] flex flex-col justify-center items-center mx-auto py-12">
        <div className="text-[25px] font-extrabold ">
          <span className="text-[15px] font-semibold ">BE</span> A PART <span className="text-[15px] font-semibold ">OF THIS</span>
        </div>
        <div className="text-[25px] font-extrabold pb-4 ">EXCITING EVENT</div>
        <div className="text-[12px] text-center leading-4 tracking-wider pb-4">
        Be a part of this electrifying event by securing your pass today! It's as easy as filling out the Google form, and you can collect your pass from the respective coordinator. Don't miss out on the fun, innovation, and celebration of Engineers' Day.
        </div>
        <button className="text-white text-[12px] font-semibold tracking-wide bg-gradient-to-r from-[#4327a3] to-[#dd117f] rounded-xl px-6 py-3">
          BUY THE PASS NOW
        </button>
      </div>
    </div>
  );
};

export default Pass;
