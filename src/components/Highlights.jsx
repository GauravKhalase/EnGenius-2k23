import React from "react";

const Highlights = () => {
  return (
    <div className="bg-[#211e1e] text-white" id="highlights">
      <div className="max-w-[80%] flex flex-col justify-center items-center mx-auto pt-5 pb-16">
        <div className="text-[25px] font-extrabold px-2 py-8 ">
          HIGHLIGHTS{" "}
          <span className="text-[15px] font-semibold ">OF EVENT</span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col justify-center items-center border-[1px] border-[#dd117f] rounded-2xl px-6 py-4 gap-3">
            <div>LIVE AUDIENCE VOTING</div>
            <div className="text-center text-[10px]">
              We've incorporated live audience voting to let you decide the best
              performances in all our competitions. Your voice matters, and we
              want you to be a part of this thrilling experience.
            </div>
          </div>
          <div className="w-[100%] flex flex-row justify-center items-center border-[1px] border-[#4327a3] rounded-xl py-2">
            Experts Talk
          </div>
          <div className="w-[100%] flex flex-row justify-center items-center border-[1px] border-[#dd117f] rounded-xl py-2">
            STAND-UP COMEDY
          </div>
          <div className="w-[100%] flex flex-row justify-center items-center border-[1px] border-[#4327a3] rounded-xl py-2">
            MUSIC PERFORMANCES
          </div>
          <div className="w-[100%] flex flex-row justify-center items-center border-[1px] border-[#dd117f] rounded-xl py-2">
            DANCE PERFORMANCES
          </div>
          <div className="w-[100%] flex flex-row justify-center items-center border-[1px] border-[#4327a3] rounded-xl py-2">
            DIGITAL TREASURE HUNT
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
