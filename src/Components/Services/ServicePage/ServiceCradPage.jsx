import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "../../loading/Loading";

const ServiceCardPage = () => {
  async function getservice() {
    return await axios.get(
      `https://camp-coding.site/safty/api/company-services`
    );
  }

  let { data, isLoading, isError } = useQuery("alldata", getservice);
  console.log(data?.data?.data);
  const services = Array.isArray(data?.data?.data) ? data.data.data : [];

  // State to control how many services are displayed
  const [visibleServices, setVisibleServices] = useState(3);

  // Function to show more services when "Show More" is clicked
  const showMoreServices = () => {
    setVisibleServices((prev) => prev + 3); // Show 3 more services at a time
  };



  return (
    <div>
      <div className="py-12 bg-gray-50">
        <h2 className="text-center text-3xl font-bold main-color mb-8">
          Our Services
        </h2>
        {isLoading ? (
          <div className="flex justify-center items-center">
<Loading/>
          </div>
        ) : isError ? (
          <div className="flex justify-center items-center">
            <p className="text-red-500 text-xl">Error loading news.</p>
          </div>
        ) :
         (
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
                    className="w-full object-cover rounded-t-lg h-[300px]"
                  />
                  <div className="content p-2">
                    <h3 className="mt-4 text-xl font-bold main-color">
                      {item.companyServiceName}
                    </h3>
                    <ul className="mt-2 text-sm text-gray-600 space-y-1">
                      {item?.serviceItems?.map((itemm, index) => (
                        <li
                          key={index}
                          className="flex text-[12px] font-medium items-start justify-between"
                        >
                          {itemm.title}
                          <span className="mr-2">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M10.4181 0.586857C10.2801 0.366495 10.077 0.194613 9.83678 0.0951373C9.5966 -0.00433835 9.33139 -0.0264583 9.07805 0.0318572L7.28005 0.444857C7.09579 0.487209 6.90432 0.487209 6.72005 0.444857L4.92205 0.0318572C4.66872 -0.0264583 4.4035 -0.00433835 4.16333 0.0951373C3.92315 0.194613 3.71997 0.366495 3.58205 0.586857L2.60205 2.15086C2.50205 2.31086 2.36705 2.44586 2.20705 2.54686L0.643053 3.52686C0.423071 3.66465 0.251441 3.8675 0.151987 4.10727C0.0525324 4.34704 0.0301873 4.61181 0.0880528 4.86486L0.501053 6.66486C0.543251 6.8488 0.543251 7.03991 0.501053 7.22386L0.0880528 9.02286C0.0299624 9.27605 0.0521951 9.54104 0.15166 9.78101C0.251125 10.021 0.422881 10.224 0.643053 10.3619L2.20705 11.3419C2.36705 11.4419 2.50205 11.5769 2.60305 11.7369L3.58305 13.3009C3.86505 13.7519 4.40305 13.9749 4.92205 13.8559L6.72005 13.4429C6.90432 13.4005 7.09579 13.4005 7.28005 13.4429L9.07905 13.8559C9.33224 13.9139 9.59724 13.8917 9.83721 13.7922C10.0772 13.6928 10.2802 13.521 10.4181 13.3009L11.3981 11.7369C11.4981 11.5769 11.6331 11.4419 11.7931 11.3419L13.3581 10.3619C13.5782 10.2238 13.7499 10.0206 13.8492 9.78039C13.9485 9.54023 13.9705 9.27509 13.9121 9.02186L13.5001 7.22386C13.4577 7.03959 13.4577 6.84812 13.5001 6.66386L13.9131 4.86486C13.9712 4.61177 13.9492 4.34685 13.8499 4.10689C13.7506 3.86693 13.579 3.66385 13.3591 3.52586L11.7941 2.54586C11.6343 2.44567 11.4992 2.31064 11.3991 2.15086L10.4181 0.586857ZM9.91505 4.71386C9.9769 4.60012 9.99223 4.46683 9.9578 4.34203C9.92338 4.21723 9.84189 4.11064 9.73047 4.0447C9.61906 3.97876 9.48641 3.9586 9.36044 3.98848C9.23447 4.01835 9.125 4.09591 9.05505 4.20486L6.44005 8.63086L4.86105 7.11886C4.81421 7.07076 4.75816 7.03259 4.69624 7.00662C4.63433 6.98065 4.56782 6.96742 4.50068 6.96771C4.43354 6.96801 4.36715 6.98182 4.30546 7.00832C4.24377 7.03483 4.18806 7.07349 4.14164 7.12199C4.09521 7.1705 4.05903 7.22786 4.03526 7.29065C4.01148 7.35344 4.0006 7.42037 4.00325 7.48746C4.0059 7.55455 4.02204 7.62041 4.05069 7.68113C4.07935 7.74185 4.11995 7.79617 4.17005 7.84086L6.20405 9.78986C6.25849 9.84191 6.32399 9.88099 6.39565 9.90418C6.46731 9.92737 6.54328 9.93408 6.6179 9.92379C6.69251 9.9135 6.76384 9.88649 6.82655 9.84477C6.88926 9.80305 6.94173 9.7477 6.98005 9.68286L9.91505 4.71386Z"
                                fill="#F0940D"
                              />
                            </svg>
                          </span>
                        </li>
                      ))}
                    </ul>
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
      </div>
    </div>
  );
};

export default ServiceCardPage;




