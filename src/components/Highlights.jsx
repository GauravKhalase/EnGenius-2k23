import React from "react";

const Highlights = () => {
  return (
    <div className="bg-[#211e1e] text-white" id="highlights">
      <div className="w-[80%] flex flex-col justify-center items-center mx-auto pt-5 pb-16">
        <div className="text-[25px] font-extrabold px-2 py-8 ">
          HIGHLIGHTS{" "}
          <span className="text-[15px] font-semibold ">OF EVENT</span>
        </div>
        <div className=" w-[100%] flex flex-col gap-4">
        <div className="w-[100%] flex flex-row justify-center items-center border-[1px] border-[#dd117f] rounded-xl py-2 hover:bg-[#ab198b] uppercase">
        Live Audience Voting
          </div>
          <div className="w-[100%] flex flex-row justify-center items-center border-[1px] border-[#4327a3] rounded-xl py-2 hover:bg-[#4327a3]">
            EXPERT'S TALK
          </div>
          <div className="w-[100%] flex flex-row justify-center items-center border-[1px] border-[#dd117f] rounded-xl py-2 hover:bg-[#ab198b]">
            STAND-UP COMEDY
          </div>
          <div className="w-[100%] flex flex-row justify-center items-center border-[1px] border-[#4327a3] rounded-xl py-2 hover:bg-[#4327a3]">
            MUSIC PERFORMANCES
          </div>
          <div className="w-[100%] flex flex-row justify-center items-center border-[1px] border-[#dd117f] rounded-xl py-2 hover:bg-[#ab198b]">
            DANCE PERFORMANCES
          </div>
          <div className="w-[100%] flex flex-row justify-center items-center border-[1px] border-[#4327a3] rounded-xl py-2 hover:bg-[#4327a3]">
            DIGITAL TREASURE HUNT
          </div>
          <div className="w-[100%] flex flex-row justify-center items-center border-[1px] border-[#dd117f] rounded-xl py-2 hover:bg-[#ab198b]">
            FUNNY SKIT/ACT
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
