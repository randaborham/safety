import React from "react";
import Cards from "../All_Cards/Card_Services.tsx";
import { useQuery } from "react-query";
import axios from "axios";
const Services = () => {
  function getservice() {
    return axios.get(`https://camp-coding.site/safty/api/company-services`);
  }

  let { data } = useQuery("alldata", getservice);
  console.log(data?.data?.data);

  return (
    <>
      <div className="relative py-5">
        <div className="textNav font- text-[36px] main-color  Heading flex items-center  justify-center ">
          <svg
            width="35"
            height="33"
            viewBox="0 0 40 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.7 17L39.5 19.82L26.44 33L19.5 26L22.3 23.18L26.44 27.34L36.7 17ZM16.5 0C18.6217 0 20.6566 0.842854 22.1569 2.34315C23.6571 3.84344 24.5 5.87827 24.5 8C24.5 10.1217 23.6571 12.1566 22.1569 13.6569C20.6566 15.1571 18.6217 16 16.5 16C14.3783 16 12.3434 15.1571 10.8431 13.6569C9.34285 12.1566 8.5 10.1217 8.5 8C8.5 5.87827 9.34285 3.84344 10.8431 2.34315C12.3434 0.842854 14.3783 0 16.5 0ZM16.5 4C15.4391 4 14.4217 4.42143 13.6716 5.17157C12.9214 5.92172 12.5 6.93913 12.5 8C12.5 9.06087 12.9214 10.0783 13.6716 10.8284C14.4217 11.5786 15.4391 12 16.5 12C17.5609 12 18.5783 11.5786 19.3284 10.8284C20.0786 10.0783 20.5 9.06087 20.5 8C20.5 6.93913 20.0786 5.92172 19.3284 5.17157C18.5783 4.42143 17.5609 4 16.5 4ZM16.5 18C17.86 18 19.5 18.18 21.32 18.52L17.98 21.86L16.5 21.8C10.56 21.8 4.3 24.72 4.3 26V28.2H16.7L20.5 32H0.5V26C0.5 20.68 11.16 18 16.5 18Z"
              fill="#F0940D"
            />
          </svg>
          <h1 className="ps-2">OUR SERVCIES</h1>
        </div>
        <Cards />
      </div>
    </>
  );
};

export default Services;
