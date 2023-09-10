import React from "react";
import Singing from "../assets/Singing.jpg";

const CardFive = () => {
  return (
    <div className="bg-white flex flex-row rounded-lg border-[1px] border-black">
      <div className="w-[30%] ">
        <img className="rounded-lg" src={Singing} alt="" />
      </div>
      <div className="w-[70%] px-5 py-2 flex flex-col justify-between items-start">
        <div>
        <div className="text-[15px] font-semibold uppercase">Singing Competition</div>
        <div className="text-[10px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, debitis. Lorem ipsum dolor sit amet.
        </div>
        </div>
        <button className="text-[12px] font-semibold text-white bg-gradient-to-r from-[#4327a3] to-[#dd117f] rounded-xl px-4 py-2 mb-[2px]">
          Participate Now
        </button>
      </div>
    </div>
  );
};

export default CardFive;
