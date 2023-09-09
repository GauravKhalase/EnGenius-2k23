import React, { useState, useRef, useEffect } from "react";
import Countdown from "react-countdown-now";

const Completionist = () => <span>You are good to go!</span>;

const renderer = ({ total, days, hours, minutes, seconds }) => {
  if (total) {
    // Render a countdown
    return (
      <div
        className=" flex flex-row bg-gradient-to-r from-[#4327a3] to-[#dd117f] rounded-xl px-12 py-2 gap-2"
        style={{ color: "white" }}
      >
        <div className="flex flex-col justify-center items-center">
          <span className="text-[25px] font-bold ">{days}</span>
          <span className="text-[10px]">DAYS</span>
        </div>
        <span className="text-[25px] font-bold ">:</span>
        <div className="flex flex-col justify-center items-center">
          <span className="text-[25px] font-bold ">{hours}</span>
          <span className="text-[10px]">HOURS</span>
        </div>
        <span className="text-[25px] font-bold ">:</span>
        <div className="flex flex-col justify-center items-center">
          <span className="text-[25px] font-bold ">{minutes}</span>
          <span className="text-[10px]">MINUTES</span>
        </div>
        <span className="text-[25px] font-bold ">:</span>
        <div className="flex flex-col justify-center items-center">
          <span className="text-[25px] font-bold ">{seconds}</span>
          <span className="text-[10px]">SECONDS</span>
        </div>
      </div>
    );
  } else {
    // Render a finished state
    return <Completionist />;
  }
};

const Timer = () => {
  return (
    <div className="App">
      <Countdown date="2023-09-15T00:00:00" renderer={renderer}>
        <Completionist />
      </Countdown>
    </div>
  );
};

export default Timer;
