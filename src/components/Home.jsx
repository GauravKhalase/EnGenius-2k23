import React from "react";
import { BiToggleRight } from "react-icons/bi";
import Timer from "./Timer";
import five from "../assets/five.jpg";

//bg-[#120101]

const Home = () => {
  return (
    <div className="bg-cover" style={{ backgroundImage: `url(${five})` }}>
      <nav className="max-w-[80%] text-white sm:text-[10px] font-semibold tracking-wide md:text-md mx-auto py-6 relative">
        <div className="flex flex-row justify-around items-center">
          <div className="flex flex-col justify center items-center gap-[2px]">
            <a href="#events">SHEDULE</a>
            <div className="h-[1px] w-[70%] bg-[#9e1a8e]"></div>
          </div>
          <div className="flex flex-col justify center items-center gap-[2px]">
            <a href="#highlights">HEIGHLIGHTS</a>
            <div className="h-[1px] w-[70%] bg-[#9e1a8e]"></div>
          </div>
          <div className="flex flex-col justify center items-center gap-[2px]">
            <a href="#gallery">GALLERY</a>
            <div className="h-[1px] w-[70%] bg-[#9e1a8e]"></div>
          </div>
          <div className="flex flex-col justify center items-center gap-[2px]">
            <a href="#pass">BUY PASS</a>
            <div className="h-[1px] w-[70%] bg-[#9e1a8e]"></div>
          </div>
          <div className="flex flex-col justify center items-center gap-[2px]">
            <a href="#talent">PARTICIPATE</a>
            <div className="h-[1px] w-[70%] bg-[#9e1a8e]"></div>
          </div>
        </div>
      </nav>
      <div className="text-white flex justify-center ">
        <div className="max-w-[80%] flex flex-col justify-center items-center pt-10">
          <div className="text-[40px] font-extrabold tracking-wide">
            EnGenius - 2k23
          </div>
          <div className=" max-w-[90%] text-[10px] flex flex-row justify-center items-center text-center font-bold leading-4 tracking-wider pb-4">
            Get ready to unleash your inner engineering enthusiast because we're
            throwing a Engineers' Day bash like no other! The excitement is off
            the charts as we gear up to celebrate the brains behind all things
            awesome and techy. We are thrilled to announce that we are
            organizing a spectacular event in celebration of Engineers' Day!
            Come join us to make this Engineers' Day a memorable one together.
            See you there!
          </div>
          <button className="text-[12px] font-bold bg-gradient-to-r from-[#4327a3] to-[#dd117f] rounded-2xl px-8 py-3 mb-16">
            KNOW MORE
          </button>
          <div className="flex flex-col justify-center items-center text-[15px] font-bold tracking-wider mb-4">
            <div>LOCATION : 'S' BUILDING SEMINAR HALL</div>
            <div>TIME : 10.00 AM TO 17.00 PM</div>
            <div>DATE : 15 SEPTEMBER, 2023</div>
          </div>
          <div className="rotate-90 text-[40px] font-thin">
            <BiToggleRight></BiToggleRight>
          </div>
          <div className="translate-y-[48%]">
            <Timer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
