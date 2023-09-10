import React from 'react'
import Cardone from './Cardone'
import Cardtwo from './Cardtwo'
import CardThree from './CardThree'
import CardFour from './CatdFour'
import CardFive from './CardFive'
import CardSix from './CardSix'

const Talent = () => {
  return (
    <div className='bg-[#f8f8f8]' id='talent'>
      
      <div className="max-w-[80%] flex flex-col justify-center items-center mx-auto py-10">
        <div className="text-[15px] font-semibold ">WANT TO<span className="text-[25px] font-extrabold"> SHOWCASE </span>YOUR</div>
        <div className="text-[25px] font-extrabold pb-5">TALENT?</div>
        <div className='flex flex-col justify-center items-center gap-5 text-center mb-6'>
          <div className="text-[12px] leading-4 tracking-wider">Participate in the following competitions and get a chance to win <span className='font-extrabold'>Prize Money</span> and participation Certificate.</div>
          <div className="text-[10px] leading-4 tracking-wider"><span className='font-extrabold'>Note :</span>
           Click the “PARTICIPATE NOW” button to know all the details about the competitions.
          </div>
        </div>
        <div className='flex flex-col gap-5'>
        <Cardone/>
        <Cardtwo/>
        <CardThree/>
        <CardSix/>
        <CardFive/>
        
      </div>
      
      </div>
      
    </div>
  )
}

export default Talent