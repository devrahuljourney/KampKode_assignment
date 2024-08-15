import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function OrbitContent() {
  return (
    <div className='flex flex-col justify-center items-center text-center gap-6 ' >
        <h1 className='font-bold md:text-[60px] text-[22px] '  >We’ve really sped up our workflow</h1>
        <p className=' text-[#475467] md:w-[50%] text-center '>We’ve just released a new update!
        Check out the all new dashboard view. Pages and now load faster.you can try us for free for 30 days.
         Join 4,000+ companies already growing</p>
        <div className='flex md:flex-row flex-col gap-3' >
            <button className='flex gap-2 justify-center items-center border-[1px] border-[#D0D5DD] p-3 font-bold '  >
                <FaArrowRightLong/>
                Start Learning Today
            </button>
            <button className="text-white font-bold bg-[#7F56D9] p-2 px-3 rounded-lg">Join Now</button>
        </div>
    </div>
  )
}

export default OrbitContent