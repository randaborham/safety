import React, { useState } from 'react';
import img1 from '../../../Assets/Layer1.jpeg'
import img2 from '../../../Assets/Layer3.png'
import img3 from '../../../Assets/Layer4.png'

import Swider from '../../swider/Swider';


const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = 3; // Total number of slides

    const handleDotClick = (slideNumber) => {
        setCurrentSlide(slideNumber);
    };

    // Function to handle the previous arrow click
    const handlePrevClick = () => {
        if (currentSlide === 1) {
            setCurrentSlide(totalSlides); // If on the first slide, go to the last
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const handleNextClick = () => {
        if (currentSlide === totalSlides) {
            setCurrentSlide(1); // If on the last slide, go to the first
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    return (



      <div className=''>
        <div className="carousel relative w-full ">
            {/* Slide 1 */}
            <div id="slide1" className={`carousel-item relative w-full ${currentSlide === 1 ? 'block' : 'hidden'}`}>
                <img
                    alt="img1"
                    src={img3}
                    className="w-full h-[80vh]"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute left-5 right-5 top-1/3 flex -translate-y-1/2 transform justify-between">

                    <div
                        onClick={handlePrevClick}
                    >
                        <button className='bg-gray-400 p-2 rounded-lg  '>
                        <svg  width="15" height="20"  viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.25 26.5L1.75 14L14.25 1.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        </button>
                      

                    </div>
                    
                    <div
                        onClick={handleNextClick}
                        >
                                <button className='bg-gray-400 p-2 rounded-lg  '>
                        <svg width="15" height="20" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.2913 1.77033L14.6089 14.4501L1.92911 26.7677" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        </button>
                      

                    </div>
                   
                </div>
                <div className="absolute left-5 right-5 top-1/3  -translate-y-1/2 w-[60%] mx-auto text-white flex flex-col gap-4 items-center justify-center h-full text-center px-4">
    <h1 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-semibold main-color">
    Creative Safety Consultants (CSC)
    </h1>
  
    <p className="text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] ">
    Are experienced and dedicated health, safety environmental (HSE) professionals who use their knowledge, skills and experience    </p> 
     </div>
            </div>

            {/* Slide 2 */}
            <div id="slide2" className={`carousel-item relative w-full ${currentSlide === 2 ? 'block' : 'hidden'}`}>
                <img
                    alt="img2"
                    src={img2}
                    className="w-full h-[80vh]"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute left-5 right-5 top-1/3 flex -translate-y-1/2 transform justify-between">
<div
    onClick={handlePrevClick}
>
    <button className='bg-gray-400 p-2 rounded-lg  '>
    <svg  width="15" height="20"  viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.25 26.5L1.75 14L14.25 1.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </button>
  

</div>

<div
    onClick={handleNextClick}
    >
            <button className='bg-gray-400 p-2 rounded-lg  '>
    <svg width="15" height="20" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.2913 1.77033L14.6089 14.4501L1.92911 26.7677" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </button>
  

</div>

</div>
<div className="absolute left-5 right-5 top-1/3  -translate-y-1/2 w-[60%] mx-auto text-white flex flex-col gap-4 items-center justify-center h-full text-center px-4">
    <h1 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-semibold main-color">
    Creative Safety Consultants (CSC)
    </h1>
  
    <p className="text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] ">
    Are experienced and dedicated health, safety environmental (HSE) professionals who use their knowledge, skills and experience    </p> 
     </div>
            </div>

            {/* Slide 3 */}
            <div id="slide3" className={`carousel-item relative w-full ${currentSlide === 3 ? 'block' : 'hidden'}`}>
                <img
                    alt="img3"
                    src={img1}
                    className="w-full h-[80vh]"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute left-5 right-5 top-1/3 flex -translate-y-1/2 transform justify-between">
<div
    onClick={handlePrevClick}
>
    <button className='bg-gray-400 p-2 rounded-lg  '>
    <svg  width="15" height="20"  viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.25 26.5L1.75 14L14.25 1.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </button>
  

</div>

<div
    onClick={handleNextClick}
    >
            <button className='bg-gray-400 p-2 rounded-lg  '>
    <svg width="15" height="20" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.2913 1.77033L14.6089 14.4501L1.92911 26.7677" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </button>
  

</div>

</div>
<div className="absolute left-5 right-5 top-1/3  -translate-y-1/2 w-[60%] mx-auto text-white flex flex-col gap-4 items-center justify-center h-full text-center px-4">
    <h1 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-semibold main-color">
    Creative Safety Consultants (CSC)
    </h1>
  
    <p className="text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] ">
    Are experienced and dedicated health, safety environmental (HSE) professionals who use their knowledge, skills and experience    </p> 
     </div>
            </div>

            {/* Dots Navigation */}
            <div className="absolute bottom-1/3 right-[45%] mt-4">
                {[1, 2, 3].map((slide) => (
                    <button
                        key={slide}
                        onClick={() => handleDotClick(slide)}
                        className={`w-10 h-[5px] rounded-full mx-1 ${currentSlide === slide ? 'bg-[#F0940D]' : 'bg-white'}`}
                    />
                ))}
            </div>


            {/* <HomeCards/> */}
            {/* </div> */}


         
        </div>
        <Swider/>
    
      </div>


    );
};

export default Carousel;
