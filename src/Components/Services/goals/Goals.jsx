import React from 'react'
import AboutUsLayer from '../../Layers/About_usLayer'
import Clients from '../../Clients/Clients'
import img from "../../../Assets/Frame 99.png"

import imgrgtange from "../../../Assets/Polygon 2.png"

export default function Goals() {
  return (
    <div>
      
        <AboutUsLayer/>
        <div className='flex justify-center items-center my-[60px]'>
            <p className='text-[#F0940D] font-bold text-[35px]'>OUR GOALS</p>
        </div>
       <div className='relative mb-[30px]'>
       <img src={imgrgtange} alt='imag' className='absolute top-[-100px] w-[200px]'/>
       <div className='lg:grid grid-cols-12'>
         
 
         <div className='col-span-6 ps-[50px]'>
        <img src={img} alt='goals' className='h-[500px]'/>
                    </div>
                    <div className='col-span-6 lg:pe-[50px] lg:ms-[-100px]  mt-[35px]'>
        <div className='w-full shadow-xl rounded-lg px-[20px] bg-[white]  py-[30px]'>
        <p className='text-[23px]'> Lorem ipsum dolor sit amet consectetur. Eget porttitor porta enim phasellus a tristique pellentesque. Commodo platea libero dui nisi tortor feugiat. Diam sit imperdiet vestibulum sed in posuere. Id lectus pellentesque pellentesque non. Libero pellentesque a sodales cum vulputate sodales massa egestas. Quis dignissim libero nisi facilisi pulvinar sem risus enim. Dignissim lacus mauris bibendum mattis non. Risus venenatis ornare pretium imperdiet consectetur scelerisque gravida. Nulla ac phasellus eu malesuada massa.</p>
        </div>
        </div>
        
        
                </div>
       </div>

        <Clients/>
    </div>
  )
}
