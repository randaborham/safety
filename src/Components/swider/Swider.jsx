import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { IoPerson } from "react-icons/io5";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function Swider() {
  return (
    <div className='mt-[-90px] mb-[10px]  '>
   <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={4}
    >
      <SwiperSlide className=' rounded-xl  '>
<div className=" rounded-xl overflow-hidden shadow w-[300px] bg-white  ">
<div className='flex flex-col justify-center items-center pt-[30px] px-[30px] pb-[10px]'>
<IoPerson className='text-[25px] text-[#F0940D] '/>

<h2 className='text-[#F0940D] my-[15px] font-bold'>OUR ADVANTAGES</h2>
<p className='' >As part of our tailored service, each of our clients benefit from access to a named HSE Consultant, who will get to know your organisation</p>
</div>
</div>

      </SwiperSlide>
      <SwiperSlide className=' rounded-xl  '>
<div className=" rounded-xl overflow-hidden shadow w-[300px] bg-white  ">
<div className='flex flex-col justify-center items-center pt-[30px] px-[30px] pb-[10px]'>
<IoPerson className='text-[25px] text-[#F0940D] '/>

<h2 className='text-[#F0940D] my-[15px] font-bold'>OUR ADVANTAGES</h2>
<p className='' >As part of our tailored service, each of our clients benefit from access to a named HSE Consultant, who will get to know your organisation</p>
</div>
</div>

      </SwiperSlide>
      <SwiperSlide className=' rounded-xl  '>
<div className=" rounded-xl overflow-hidden shadow w-[300px] bg-white  ">
<div className='flex flex-col justify-center items-center pt-[30px] px-[30px] pb-[10px]'>
<IoPerson className='text-[25px] text-[#F0940D] '/>

<h2 className='text-[#F0940D] my-[15px] font-bold'>OUR ADVANTAGES</h2>
<p className='' >As part of our tailored service, each of our clients benefit from access to a named HSE Consultant, who will get to know your organisation</p>
</div>
</div>

      </SwiperSlide>
      <SwiperSlide className=' rounded-xl  '>
<div className=" rounded-xl overflow-hidden shadow w-[300px] bg-white  ">
<div className='flex flex-col justify-center items-center pt-[30px] px-[30px] pb-[10px]'>
<IoPerson className='text-[25px] text-[#F0940D] '/>

<h2 className='text-[#F0940D] my-[15px] font-bold'>OUR ADVANTAGES</h2>
<p className='' >As part of our tailored service, each of our clients benefit from access to a named HSE Consultant, who will get to know your organisation</p>
</div>
</div>

      </SwiperSlide>
      <SwiperSlide className=' rounded-xl  '>
<div className=" rounded-xl overflow-hidden shadow w-[300px] bg-white  ">
<div className='flex flex-col justify-center items-center pt-[30px] px-[30px] pb-[10px]'>
<IoPerson className='text-[25px] text-[#F0940D] '/>

<h2 className='text-[#F0940D] my-[15px] font-bold'>OUR ADVANTAGES</h2>
<p className='' >As part of our tailored service, each of our clients benefit from access to a named HSE Consultant, who will get to know your organisation</p>
</div>
</div>

      </SwiperSlide>
      <SwiperSlide className=' rounded-xl  '>
<div className=" rounded-xl overflow-hidden shadow w-[300px] bg-white  ">
<div className='flex flex-col justify-center items-center pt-[30px] px-[30px] pb-[10px]'>
<IoPerson className='text-[25px] text-[#F0940D] '/>

<h2 className='text-[#F0940D] my-[15px] font-bold'>OUR ADVANTAGES</h2>
<p className='' >As part of our tailored service, each of our clients benefit from access to a named HSE Consultant, who will get to know your organisation</p>
</div>
</div>

      </SwiperSlide>
    </Swiper>
    </div>
  )
}
