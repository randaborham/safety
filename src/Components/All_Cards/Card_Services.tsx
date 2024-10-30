import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../loading/Loading";

const Card = ({ image, title }) => (
  <div className="max-w-xs  bg-white rounded-xl shadow-md  flex flex-col h-full">
    <img
      src={image}
      alt={title}
      className="h-40 rounded-t-xl w-full object-cover"
    />
    <div className="px-4 py-2 flex-grow">
      <h2 className="text-xl font-bold text-[#F0940D]">{title}</h2>
    </div>
    <div className="px-2  py-4 flex justify-end">
      <div className="bg-[#F0940D] text-white p-1 rounded-full">
        <svg
          width="12"
          height="12"
          viewBox="0 0 15 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.293 0.293031C8.48053 0.105559 8.73484 0.000244141 9 0.000244141C9.26516 0.000244141 9.51947 0.105559 9.707 0.293031L14.207 4.79303C14.3945 4.98056 14.4998 5.23487 14.4998 5.50003C14.4998 5.76519 14.3945 6.0195 14.207 6.20703L9.707 10.707C9.5184 10.8892 9.2658 10.99 9.0036 10.9877C8.7414 10.9854 8.49059 10.8803 8.30518 10.6948C8.11977 10.5094 8.0146 10.2586 8.01233 9.99643C8.01005 9.73423 8.11084 9.48163 8.293 9.29303L11 6.50003H1.5C1.23478 6.50003 0.98043 6.39467 0.792893 6.20714C0.605357 6.0196 0.5 5.76525 0.5 5.50003C0.5 5.23481 0.605357 4.98046 0.792893 4.79292C0.98043 4.60539 1.23478 4.50003 1.5 4.50003H11L8.293 1.70703C8.10553 1.5195 8.00021 1.26519 8.00021 1.00003C8.00021 0.734866 8.10553 0.480558 8.293 0.293031Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  </div>
);

const Cards = () => {
  async function getservice() {
    return await axios.get(
      `https://camp-coding.site/safty/api/company-services`
    );
  }

  let { data, isLoading, isError } = useQuery("alldata", getservice);
  console.log(data?.data?.data);
  const services = Array.isArray(data?.data?.data) ? data.data.data : [];
  const [visibleServices, setVisibleServices] = useState(3);

  // Function to show more services when "Show More" is clicked
  const showMoreServices = () => {
    setVisibleServices((prev) => prev + 3); // Show 3 more services at a time
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <Loading />
        </div>
      ) : isError ? (
        <div className="flex justify-center items-center">
          <p className="text-red-500 text-xl">Error loading news.</p>
        </div>
      ) : (
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, visibleServices).map((item) => (
              <Link
                to={"/ServiceDetails/" + item.companyServiceId}
                className="bg-white rounded-lg textNav shadow-lg  cursor-pointer"
              >
                <img
                  src={item.companyServiceImageUrl}
                  alt={item.companyServiceName}
                  className="w-full object-cover rounded-t-lg h-[200px]"
                />
                <div className="content p-4">
                  <h3 className="mt-3 text-xl font-bold main-color">
                    {item.companyServiceName}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          {visibleServices < data?.data?.data.length && (
            <div className="text-center mt-8">
              <button
                onClick={showMoreServices}
                className="bg-[#F0940D] text-white px-6 py-3 rounded-lg text-2xl"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Cards;
