import React from "react";

const Pass = () => {
  return (
    <div className="bg-[#f8f8f8]" id="pass">
      <div className="max-w-[80%] flex flex-col justify-center items-center mx-auto py-12">
        <div className="text-[25px] font-extrabold ">
          <span className="text-[15px] font-semibold ">BE</span> A PART{" "}
          <span className="text-[15px] font-semibold ">OF THIS</span>
        </div>
        <div className="text-[25px] font-extrabold pb-4 ">EXCITING EVENT</div>
        <div className="text-[12px] text-center leading-4 tracking-wider pb-4">
          Be a part of this electrifying event by securing your pass today! It's
          as easy as filling out the Google form, and you can collect your pass
          from the respective coordinator. Don't miss out on the fun,
          innovation, and celebration of Engineers' Day.
        </div>
        <div className="text-center pb-5">
          <div className="font-semibold">The Pass includes some benefits mentioned...</div>
          <div className="text-[15px]">
            1. Enjoy the event show with comfort and reserved seat for oneself.
          </div>
          <div className="text-[15px]">2. Snacks will be provided during the break.</div>
        </div >
        <div className="text-center  pb-5">This PASS costs you only <span className="font-semibold">30/-</span> per head for entire Event</div>
        <div className="text-red-500 font-bold text-xl uppercase pb-5">Sorry! <span className="text-[15px] font-semibold text-black">you are late.</span></div>
        <div className="text-center font-semibold pb-5">All seats are fully booked for EnGenius-2023.</div>
        
        <a className="pb-5" href="">
          {/* bg-gradient-to-r from-[#4327a3] to-[#dd117f] */}
          <button className=" text-[12px] cursor-default font-semibold text-black bg-gray-400 tracking-wide  rounded-xl px-6 py-3">
            GET THE PASS NOW*
          </button>
        </a>
        <div className="text-center"><span className="font-bold">NOTE : </span>Keep your entry pass with you for venue entry.</div>
      </div>
    </div>
  );
};

export default Pass;
