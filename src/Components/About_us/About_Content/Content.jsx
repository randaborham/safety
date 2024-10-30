import React, { useState } from 'react';
import img1 from '../../../Assets/Ellipse 6.png';
import img2 from '../../../Assets/Ellipse 7.png';
import img3 from '../../../Assets/Ellipse 8.png';
import img4 from '../../../Assets/Ellipse 9.png';
import img5 from '../../../Assets/Ellipse 10.png';

const SafetyConsultants = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="grid grid-cols-12 justify-center p-8 mt-10 mb-12 bg-white">
      {/* Left side images (3 columns) */}
      <div className="col-span-12 md:col-span-4 px-5  hidden lg:flex">
        <div className="relative w-full h-full">
          {/* Main large image */}
          <div className="absolute -top-10 left-36 w-32 h-32 rounded-full overflow-hidden">
            <img
              src={img1}
              alt="Worker 1"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Smaller images */}
          <div className="absolute top-20 left-24 w-24 h-24 rounded-full overflow-hidden">
            <img
              src={img2}
              alt="Worker 2"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute top-20 left-56 w-20 h-20 rounded-full overflow-hidden">
            <img
              src={img3}
              alt="Worker 3"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute top-40 left-44 w-20 h-20 rounded-full overflow-hidden">
            <img
              src={img4}
              alt="Worker 4"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute top-52 left-64 w-12 h-12 rounded-full overflow-hidden">
            <img
              src={img5}
              alt="Worker 5"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Right side text content (8 columns) */}
      <div className="col-span-12 md:col-span-12 lg:col-span-8 flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl lg:text-[36px] font-semibold text-center md:text-left">
          Creative Safety Consultants (CSC)
        </h2>
        <p className="mt-2 text-lg md:text-[24px] text-gray-400 w-full md:w-[70%] mx-auto md:mx-0 text-center md:text-left">
          are experienced and dedicated health, safety, environmental (HSE)
          professionals who use their knowledge, skills, and experience to:
          Promote a positive health, safety, environmental culture across an
          organisation. Develop solutions to health, safety, and environmental
          challenges. Ensure workplace risks are well controlled.
          {showMore && (
            <>
              {' '}At CSC, we focus on improving workplace safety and ensuring
              the health of every worker. Our consultancy spans across various
              sectors, tailoring safety solutions to your needs.
            </>
          )}
        </p>

        <div className="mt-6 flex justify-center md:justify-start">
          <button
            onClick={handleShowMore}
            className="bg-[#F0940D] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#e0830d] transition-all duration-300 w-full max-w-[300px]"
          >
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SafetyConsultants;
