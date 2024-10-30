import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../Assets/955457d2bc103fca5c3b523f05a6acc8.jpeg"
import image2 from "../../Assets/3c80a8466a617407b7e3a03808214d62.jpeg"
import image3 from "../../Assets/05676d53fba46e9b9300b53800f92f00.jpeg"

const CardClients = () => {
  const images = [
   {imagePath:image1},
   {imagePath:image2},
   {imagePath:image3},
   {imagePath:image3},
   {imagePath:image3},
   {imagePath:image3},
  ];

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
        {images.map((image, index) => (
          <div key={index} className="p-2">
            <div className="border border-black rounded-lg p-3">
              <img src={image?.imagePath}  alt={`Slide ${index}`} className="w-full h-[250px]" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardClients;
