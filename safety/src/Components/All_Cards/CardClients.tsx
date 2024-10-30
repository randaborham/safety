import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import axios from 'axios';
import { useQuery } from 'react-query'
const CardClients = () => {

  function getapi(){
    return axios.get(`https://camp-coding.site/safty/api/company-clients`)
  }
  let {data} = useQuery("dataclient", getapi)
  console.log(data?.data?.data)
  const settings = {
    dots: false,
    infinite: false,
    speed: 1200,
    arrows: false,
    slidesToShow: 4.5,
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
    <div className="p-5">
      <Slider {...settings}>
        {data?.data?.data?.map((image, index) => (
          <div key={index} className="p-2">
            <div className="border border-black rounded-lg p-3">
              <img src={image?.clientImageUrl}  alt={`Slide ${index}`} className="w-full h-[250px]" />
            </div>
          </div>
        ))}
      </Slider>
      
    </div>
  );
};

export default CardClients;
