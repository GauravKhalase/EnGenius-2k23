import React from "react";
import SUAISA from "../assets/SUAISA.jpg";
import SUCFSA from "../assets/SUCFSA.jpg";
import SUCSSA from "../assets/SUCSSA.jpg";
import SUCTSA from "../assets/SUCTSA.jpg";

const Organizers = () => {
  return (
    <div>
      <div className="max-w-[80%] flex flex-col justify-center items-center mx-auto py-10">
        <div className="text-[25px] font-extrabold pb-5">
          ORGANIZED <span className="text-[15px] font-semibold ">BY</span>
        </div>
        <div className="w-[100%] flex flex-row justify-between items-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <img
              className="w-[70px] h-[70px] rounded-full"
              src={SUAISA}
              alt=""
            />
            <div className="text-[12px] font-bold">SUAISA</div>
            <div className="text-[6px]">DEPARTMENT OF AIML</div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <img
              className="w-[70px] h-[70px] rounded-full"
              src={SUCFSA}
              alt=""
            />
            <div className="text-[12px] font-bold">SUCFSA</div>
            <div className="text-[6px]">DEPARTMENT OF CSF</div>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <img
              className="w-[64px] h-[64px] rounded-full"
              src={SUCSSA}
              alt=""
            />
            <div className="text-[12px] font-bold">SUCSSA</div>
            <div className="text-[6px]">DEPARTMENT OF CSE</div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <img
              className="w-[70px] h-[70px] rounded-full"
              src={SUCTSA}
              alt=""
            />
            <div className="text-[12px] font-bold">SUCTSA</div>
            <div className="text-[6px]">DEPARTMENT OF CTIS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizers;
