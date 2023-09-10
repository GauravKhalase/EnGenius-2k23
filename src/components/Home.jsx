import React from "react";
import { BiToggleRight } from "react-icons/bi";
import Timer from "./Timer";

const Home = () => {
  return (
    <div className="bg-[#120101] ">
      <nav className="max-w-[80%] text-white sm:text-[10px] md:text-md mx-auto py-6">
        <div className="flex flex-row justify-around items-center">
          <div className="flex flex-col justify center items-center gap-[2px]">
            <a href="#events">SHEDULE</a>
            <div className="h-[1px] w-[70%] bg-[#68219a]"></div>
          </div>
          <div className="flex flex-col justify center items-center gap-[2px]">
            <a href="#highlights">HEIGHLIGHTS</a>
            <div className="h-[1px] w-[70%] bg-[#68219a]"></div>
          </div>
          <div className="flex flex-col justify center items-center gap-[2px]">
            <a href="#gallery">GALLERY</a>
            <div className="h-[1px] w-[70%] bg-[#68219a]"></div>
          </div>
          <div className="flex flex-col justify center items-center gap-[2px]">
            <a href="#pass">BUY PASS</a>
            <div className="h-[1px] w-[70%] bg-[#68219a]"></div>
          </div>
          <div className="flex flex-col justify center items-center gap-[2px]">
            <a href="#talent">PARTICIPATE</a>
            <div className="h-[1px] w-[70%] bg-[#68219a]"></div>
          </div>
        </div>
      </nav>
      <div className="text-white flex justify-center ">
        <div className="max-w-[80%] flex flex-col justify-center items-center pt-10">
          <div className="text-[36px] font-bold">EnGenius - 2k23</div>
          <div className=" max-w-[90%] text-[10px] flex flex-row justify-center items-center text-center leading-4 tracking-wider pb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            asperiores doloribus illfdgo id voluptatibus accusantium doloresdc
            quis facilis suscipit quos tempora quibusdam nostrum.
          </div>
          <button className="bg-gradient-to-r from-[#4327a3] to-[#dd117f] rounded-xl px-5 py-2 mb-16">
            KNOW MORE
          </button>
          <div className="flex flex-col justify-center items-center text-[14px] tracking-wider mb-4">
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
