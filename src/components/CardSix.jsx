import React from 'react'
import Dancing from "../assets/Dancing.jpg";


const CardSix = () => {
  return (
    <div>
        <div className="md:w-[350px] bg-[#323232] flex flex-row rounded-lg">
      
      <div className="sm:w-[70%] md:w-[250px] px-5 py-2 flex flex-col justify-between items-start text-white">
        <div>
        <div className="text-[15px] font-semibold uppercase">Dancing Competition</div>
        <div className="text-[10px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, debitis. Lorem ipsum dolor sit amet.
        </div>
        </div>
        <a href="https://forms.gle/KK5DRotPVpmEeyYG9">
        <button className="text-[12px] font-semibold text-white bg-gradient-to-r from-[#4327a3] to-[#dd117f] rounded-lg px-4 py-2 mb-[2px]">
          Participate Now
        </button>
        </a>
      </div>
      <div className="sm:w-[30%] md:w-[100px]">
        <img className="rounded-lg" src={Dancing} alt="" />
      </div>
    </div>
    </div>
  )
}

export default CardSix