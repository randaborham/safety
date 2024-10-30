import React from 'react';
import './AboutLayer.css'
const AboutUsLayer = () => {
    return <>
<div className="About-bg  flex items-center justify-center">
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="relative z-10 text-white flex flex-col gap-4 items-center justify-center h-full text-center px-4">
    <h1 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-semibold tracking-wide main-color">
      Welcome (CSC)
    </h1>
    <p className="text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] w-full sm:w-[80%] md:w-[75%] lg:w-[70%] tracking-wider">
      We are here a family that works to satisfy you and always works for your safety at all times
    </p>
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-5 text-[20px] sm:text-[22px] lg:text-[25px]">
      <button className="flex items-center px-4 sm:px-6 py-3 bg-[#F0940D] transition duration-500 ease-in-out rounded-lg">
        Our Services
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
      <button className="flex items-center px-4 sm:px-6 py-3 border border-white transition duration-500 ease-in-out bg-transparent rounded-lg">
        Contact Us
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

        
    </>
}

export default AboutUsLayer;
