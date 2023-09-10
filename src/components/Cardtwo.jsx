import React from 'react'
import Project from "../assets/Project.jpeg";


const Cardtwo = () => {
  return (
    <div>
        <div className="bg-[#323232] flex flex-row rounded-lg">
      
      <div className="w-[70%] px-5 py-2 flex flex-col justify-between items-start text-white">
        <div>
        <div className="text-[15px] font-semibold uppercase">Project Competition</div>
        <div className="text-[10px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, debitis. Lorem ipsum dolor sit amet.
        </div>
        </div>
        <button className="text-[12px] font-semibold text-white bg-gradient-to-r from-[#4327a3] to-[#dd117f] rounded-xl px-4 py-2 mb-[2px]">
          Participate Now
        </button>
      </div>
      <div className="w-[30%] ">
        <img className="rounded-lg" src={Project} alt="" />
      </div>
    </div>
    </div>
  )
}

export default Cardtwo