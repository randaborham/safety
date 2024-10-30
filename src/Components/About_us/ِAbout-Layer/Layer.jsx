import React from 'react';
import './Layer.css'
const Layer = () => {
    return <>
<div className="p-5 px-2 ">
    <div className="Layer-bg rounded-xl ">

  <div className="absolute inset-0 bg-black opacity-50  rounded-xl"></div>
  <div className="relative z-10 text-white flex flex-col   justify-center  gap-4  h-full  px-4">
    
    <p className="text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] w-full sm:w-[80%] md:w-[75%] lg:w-[70%] textNav font-semibold">
    Creative Safety Consultants (CSC) <br />
Download Our Profile To Explore Our Services
    </p>
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-5 text-[20px] sm:text-[22px] lg:text-[25px]">
      <button className="flex items-center textNav font-semibold px-4 sm:px-6 py-3 bg-[#F0940D] transition duration-500 ease-in-out rounded-lg">
      Download
        <svg
          className="w-5 sm:w-6 h-5 sm:h-6 pt-1 ms-2"
          viewBox="0 0 31 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.16671 12L29.8334 12M29.8334 12L19.0834 22.75M29.8334 12L19.0834 1.25"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

    </div>
  </div>
</div>

        
</div>
</>
}

export default Layer;
