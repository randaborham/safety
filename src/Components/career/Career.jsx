import React from 'react'
import careerimg from "../../Assets/Rectangle 161.png"
export default function Career() {
  return (
    <>
    <div className='lg:grid grid-cols-12  relative mt-[50px]'>
        
        <div className='col-span-6 mb-[30px] lg:mb-[0px] px-12 '>
<div className='flex justify-center'>
<h1 className='text-[#F0940D] lg:text-[80px] text-[50px] font-bold'>Join  <span className='text-black'>Us</span></h1>
</div>       
     <p  className='font-bold mt-[30px]'>Lorem ipsum dolor sit amet consectetur. Amet pellentesque porttitor cras id sem ut bibendum lorem. Elit lacus quis enim quam elementum vestibulum vel consectetur.</p>
        </div>
        <div className='col-span-6'>
          <div className='flex justify-end'>
          <img src={careerimg} className='w-[700px]  h-[400px]' alt='career'/>
          </div>
        </div>
        <div className='bg-[#F0940D] py-8 px-4 absolute lg:bottom-[-60px] bottom-[-90px] right-[40%]  rounded-tr-[60px] rounded-bl-[60px] h-[200px] flex justify-center items-center w-[250px] text-[white]'>
            <p className='text-center font-bold'>Lorem ipsum dolor sit amet consectetur. Risus proin viverra dis nam sed. Ac tortor et at iaculis nisl sit ornare proin ut.</p>
        </div>
    </div>
    <div className="form lg:w-[75%] m-auto mt-[150px] ">
        <div className='w-full h-[10px] border rounded-md bg-[#F0940D]'>

        </div>
  <div className="w-full">
  <form className="bg-white shadow-lg rounded px-8 pt-6 pb-[100px] mb-4">
  <div className="text">
        <div className="title flex flex-col justify-center items-center">
           <p className='text-[#F0940D] font-bold text-[36px] '>Apply to work with us</p>
        </div>
    </div>
       <div className='grid grid-cols-12 gap-3'>
   <div className="col-span-6">
      
      <input className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder='First Name*' type="text"  />
     
    </div>
    <div className="col-span-6">
    <input className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder='Last Name*' type="text"  />
    </div>
   </div>
    <div className="mb-4">
   
      <input placeholder='Email*' className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" id="Email" type="Email"  />
    </div>
   <div className='grid grid-cols-12 gap-3'>
   <div className="col-span-6">
 
      <input placeholder='location*' className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="location" type="text"  />
     
     
    </div>
    <div className="col-span-6">
   
      <input placeholder='Phone*' className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="number"  />
     
    </div>
   </div>
  
<textarea className='w-full' placeholder='Box for Summary*'/>
<div>

  {/* <label className="block mb-2 text-sm font-medium  text-gray-900 dark:text-white" htmlFor="large_size">Large file input</label> */}
  <input className="  w-full text-lg py-8 px-8 file-input-warning  border border-black rounded-lg cursor-pointer" id="large_size" type="file" />
</div>


    <div className="flex items-center justify-center mt-[50px] ">
    <button className="flex items-center  text-[white] font-semibold   px-8 sm:px-6 py-3 bg-[#F0940D] transition duration-500 ease-in-out rounded-lg">
    Submit

      </button>
   
    </div>
  </form>

</div>

    </div>
    </>
  )
}
