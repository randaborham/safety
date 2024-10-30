import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeCards = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 1200,
    arrows: false,
    slidesToShow: 3.1,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='relative'>
    <Slider {...settings}>
      {/* Card 1 */}
      <div key="card1" className='card shadow-xl bg-white text-center flex flex-col justify-center items-center p-4'>
        <div className='flex justify-center items-center mb-4'>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="#F0940D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z" stroke="#F0940D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z" stroke="#F0940D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="text-xl font-bold mt-4">OUR GOALS</h1>
        <p className="text-start mt-2 text-gray-600">
          Our goal is to enable clients to use their internal resources and talent to outperform benchmarks, raise productivity
        </p>
      </div>

      {/* Card 2 */}
      <div key="card2" className='card bg-white flex flex-col justify-center items-center p-4'>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M8.433 27.442C7.82968 27.8116 7.3764 28.3825 7.15324 29.0539C6.93008 29.7253 6.9514 30.454 7.21342 31.1112C7.47545 31.7684 7.96133 32.3119 8.58522 32.6456C9.20911 32.9792 9.93086 33.0817 10.623 32.9348C11.3151 32.7879 11.933 32.4011 12.3675 31.8428C12.8021 31.2844 13.0253 30.5905 12.9978 29.8835C12.9703 29.1765 12.6938 28.502 12.2172 27.9791C11.7405 27.4562 11.0944 27.1187 10.393 27.026C10.3555 26.8918 10.3212 26.7568 10.29 26.621C10.1538 26.0031 10.047 25.379 9.97 24.751C9.88733 24.1161 9.84059 23.4771 9.83 22.837C9.82838 22.6612 9.83338 22.4854 9.845 22.31C10.2297 22.1993 10.6147 22.1003 11 22.013C11.441 21.913 11.703 22.433 11.914 22.855L12 23.024H23.749C23.978 22.59 24.497 21.898 25 22.013C25.5373 22.1357 26.0737 22.28 26.609 22.446L26.606 22.447C26.604 22.445 26.604 22.4457 26.606 22.449C26.61 22.463 26.632 22.529 26.654 22.669C26.6793 22.8317 26.696 23.04 26.704 23.294C26.718 23.798 26.689 24.411 26.63 25.029C26.57 25.646 26.481 26.243 26.381 26.714C26.359 26.8187 26.337 26.914 26.315 27H25C24.8143 27.0001 24.6324 27.0519 24.4745 27.1496C24.3166 27.2472 24.189 27.3869 24.106 27.553L23.106 29.553C23.0365 29.6918 23.0002 29.8448 23 30V32C23 32.2652 23.1054 32.5196 23.2929 32.7071C23.4804 32.8946 23.7348 33 24 33H26V31H25V30.236L25.618 29H28.382L29 30.236V31H28V33H30C30.2652 33 30.5196 32.8946 30.7071 32.7071C30.8946 32.5196 31 32.2652 31 32V30C30.9998 29.8448 30.9635 29.6918 30.894 29.553L29.894 27.553C29.811 27.3869 29.6834 27.2472 29.5255 27.1496C29.3676 27.0519 29.1857 27.0001 29 27H28.364C28.471 26.467 28.56 25.845 28.62 25.221C28.686 24.547 28.72 23.848 28.703 23.238L28.702 23.21C32.69 24.895 36 27.666 36 30.57V36H0V30.57C0 27.538 3.61 24.65 7.831 22.993C7.842 23.615 7.901 24.318 7.986 24.999C8.078 25.734 8.203 26.465 8.341 27.067C8.371 27.1957 8.401 27.3241 8.433 27.442Z" fill="#4F4F4F"/>
        </svg>
        <h1 className="text-xl font-bold mt-4">WE'RE HERE FOR YOU</h1>
        <p className="text-start mt-2 text-gray-600">
          Our team is dedicated to providing you with the support you need. Whether it’s answering questions or offering guidance, we’re here to help.
        </p>
      </div>

      {/* Card 3 */}
      <div key="card3" className='card shadow-xl bg-white text-center flex flex-col justify-center items-center p-4'>
        <div className='flex justify-center items-center mb-4'>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0ZM18 31.6364C10.0302 31.6364 3.36364 24.9698 3.36364 18C3.36364 11.0302 10.0302 4.36364 18 4.36364C25.9698 4.36364 32.6364 11.0302 32.6364 18C32.6364 24.9698 25.9698 31.6364 18 31.6364ZM18 10.6364C16.7516 10.6364 15.6364 11.7516 15.6364 13C15.6364 14.2484 16.7516 15.3636 18 15.3636C19.2484 15.3636 20.3636 14.2484 20.3636 13C20.3636 11.7516 19.2484 10.6364 18 10.6364ZM18 28.6364C15.9903 28.6364 14.2857 26.4777 14.2857 24H21.7143C21.7143 26.4777 20.0097 28.6364 18 28.6364Z" fill="#4F4F4F"/>
          </svg>
        </div>
        <h1 className="text-xl font-bold mt-4">SUPPORT AND CARE</h1>
        <p className="text-start mt-2 text-gray-600">
          Our support team is always ready to assist you. Reach out to us for any issues or questions, and we will be happy to help.
        </p>
      </div>

      {/* Add more cards as needed */}
    </Slider>
    </div>
  );
};

export default HomeCards;
