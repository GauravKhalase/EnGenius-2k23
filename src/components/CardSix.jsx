import React from "react";
import Dancing from "../assets/Dancing.jpg";

const CardSix = () => {
  return (
    <div>
      <div className="md:w-[350px] bg-[#323232] flex flex-row rounded-lg">
        <div className="sm:w-[70%] md:w-[250px] px-5 py-2 flex flex-col justify-between items-start text-white">
          <div>
            <div className="text-[15px] font-semibold uppercase">
              Dancing Competition
            </div>
            <div className="text-[10px]">
              Show off your dance skills and groove to the beat.
            </div>
          </div>
          <a href="">
          <button className="text-[12px] cursor-default font-semibold text-gray-900 bg-gray-400 rounded-lg px-4 py-2 mb-[2px]">
          Entries Full*
        </button>
          </a>
        </div>
        <div className="sm:w-[30%] md:w-[100px]">
          <img className="rounded-lg" src={Dancing} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CardSix;
