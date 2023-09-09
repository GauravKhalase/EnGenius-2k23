import React from 'react'

const Talent = () => {
  return (
    <div className='bg-[#f8f8f8]'>
      <div className="max-w-[80%] flex flex-col justify-center items-center mx-auto py-10">
        <div className="text-[15px] font-semibold ">WANT TO<span className="text-[25px] font-extrabold"> SHOWCASE </span>YOUR</div>
        <div className="text-[25px] font-extrabold pb-5">TALENT?</div>
        <div className='flex flex-col gap-2 pb-6'>
        <div>1.SOMETHING - <span className='text-[15px]'>Lorem ipsum dolor sit amet.</span></div>
        <div>2.SOMETHING - <span className='text-[15px]'>Lorem ipsum dolor sit amet.</span></div>
        <div>3.SOMETHING - <span className='text-[15px]'>Lorem ipsum dolor sit amet.</span></div>
        <div>4.SOMETHING - <span className='text-[15px]'>Lorem ipsum dolor sit amet.</span></div>
      </div>
      <button className="text-white bg-gradient-to-r from-[#4327a3] to-[#dd117f] rounded-xl px-5 py-2">
              BUY THE PASS NOW
            </button>
      </div>
      
    </div>
  )
}

export default Talent