import React from "react";
import Photography from "../assets/Photography.jpg";

const CardThree = () => {
  return (
    <div className="bg-white flex flex-row rounded-lg border-[1px] border-black">
      <div className="w-[30%] ">
        <img className="rounded-lg" src={Photography} alt="" />
      </div>
      <div className="w-[70%] px-5 py-2 flex flex-col justify-between items-start">
        <div>
        <div className="text-[15px] font-semibold uppercase">Photography Competition</div>
        <div className="text-[10px]">
          Lorem ipsum dolor sit amet consectet.
        </div>
        </div>
        <button className="text-[12px] font-semibold text-white bg-gradient-to-r from-[#4327a3] to-[#dd117f] rounded-xl px-4 py-2 mb-[2px]">
          Participate Now
        </button>
      </div>
    </div>
  );
};

export default CardThree;
