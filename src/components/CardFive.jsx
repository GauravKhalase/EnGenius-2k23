import React from "react";
import Singing from "../assets/Singing.jpg";

const CardFive = () => {
  return (
    <div className="md:w-[350px] bg-white flex flex-row rounded-lg border-[1px] border-black">
      <div className="sm:w-[30%] md:w-[100px]">
        <img className="rounded-lg" src={Singing} alt="" />
      </div>
      <div className="sm:w-[70%] md:w-[250px] px-5 py-2 flex flex-col justify-between items-end">
        <div>
        <div className="text-[15px] font-semibold uppercase text-right">Singing Competition</div>
        <div className="text-[10px] text-right">
        Serenade the audience with your vocal talent.

        </div>
        </div>
        <a href="https://forms.gle/84GVT4McnuPnJjX89">
        <button className="text-[12px] cursor-default font-semibold text-gray-900 bg-gray-400 rounded-lg px-4 py-2 mb-[2px]">
          Entries Full*
        </button>
        </a>
      </div>
    </div>
  );
};

export default CardFive;
