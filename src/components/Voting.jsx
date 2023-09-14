import React from "react";
import VotingTimer from "./VotingTimer";
import click from "../assets/click.jpg";

const Voting = () => {
  return (
    <div className="max-w-[80%] flex flex-col justify-center items-center mx-auto pt-20 pb-12 gap-5">
      <div className="text-[25px] font-extrabold uppercase">
        <span className="text-[15px] text-semibold uppercase">Live</span>{" "}
        Audience Voting
      </div>
      <div className="text-center text-[12px]">
        We've incorporated live audience voting to let you decide the best
        performances in all our competitions. Your voice matters, and we want
        you to be a part of this thrilling experience.
      </div>
      <div className="text-center text-[25px] font-extrabold uppercase bg-gradient-to-r from-[#4327a3] to-[#dd117f] text-transparent bg-clip-text">
        Voting is Open!
      </div>
      <div className="text-center text-[18px] font-bold uppercase text-black bg-clip-text tracking tracking-wide">
        Let's vote for your favourite contestent
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
      <a href="">
        <button className="text-[16px] text-white font-bold bg-gradient-to-r from-[#4327a3] to-[#dd117f] rounded-xl px-8 py-3 tracking-wide">
          VOTE FOR BEST DANCER
        </button>
      </a>
      {/* <a href="">
        <button className="text-[16px] text-white font-bold bg-gradient-to-r from-[#4327a3] to-[#dd117f] rounded-xl px-8 py-3 tracking-wide">
          VOTE FOR BEST SINGER
        </button>
      </a>
      <a href="">
        <button className="text-[16px] text-white font-bold bg-gradient-to-r from-[#4327a3] to-[#dd117f] rounded-xl px-8 py-3 tracking-wide">
          VOTE FOR BEST PHOTOGRAPHER
        </button>
      </a> */}
    <div><img className="h-[150px]" src={click} alt="" /></div>
    </div>
      <div className="pb-4">
        <VotingTimer />
      </div>
      <div className="text-center text-[25px] font-extrabold uppercase bg-gradient-to-r from-[#4327a3] to-[#dd117f] text-transparent bg-clip-text italic">
        Hurry up!
      </div>
    </div>
  );
};

export default Voting;
