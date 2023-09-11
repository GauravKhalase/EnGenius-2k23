import React from 'react'
import Project from "../assets/Project.jpeg";


const Cardtwo = () => {
  return (
    <div>
        <div className="md:w-[350px] bg-[#323232] flex flex-row rounded-lg">
      
      <div className="sm:w-[70%] md:w-[250px] px-5 py-2 flex flex-col justify-between items-start text-white">
        <div>
        <div className="text-[15px] font-semibold uppercase">Project Competition</div>
        <div className="text-[10px]">
        Race against the clock to finish a creative project..
        </div>
        </div>
        <a href="https://forms.gle/M64bDYok1Hh9qvQL6">
        <button className="text-[12px] font-semibold text-white bg-gradient-to-r from-[#4327a3] to-[#dd117f] rounded-lg px-4 py-2 mb-[2px]">
          Participate Now
        </button>
        </a>
      </div>
      <div className="sm:w-[30%] md:w-[100px]">
        <img className="rounded-lg" src={Project} alt="" />
      </div>
    </div>
    </div>
  )
}

export default Cardtwo