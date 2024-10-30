import React from 'react';
import img from '../../Assets/Frame 43.png'; // Replace with your image path
import Clients from '../Clients/Clients';
import AboutUsLayer from '../Layers/About_usLayer';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../loading/Loading';

const ServiceDetails = () => {
  let params = useParams()
  function getdetails(id){

    return axios.get(`https://camp-coding.site/safty/api/service-items/${id}`)
  
  }
  let  { data, isLoading, isError }= useQuery("alldata",()=> getdetails(params.id))
  console.log(data)
  return <>
        <AboutUsLayer/>

    <div className="container mx-auto px-4 py-8">
      {/* Image Section */}


      {isLoading ? (
          <div className="flex justify-center items-center">
<Loading/>
          </div>
        ) : isError ? (
          <div className="flex justify-center items-center">
            <p className="text-red-500 text-xl">Error loading news.</p>
          </div>
        ) : (
          <div className="w-full">
          {data?.data?.data?.companyServices?.map((item)=>
          <div>
          <img src={item.companyServiceImageUrl} alt="Site Assessment" className="rounded-lg shadow-lg w-[50%] mx-auto" />
          <h2 className="text-3xl font-bold  mt-6 mb-4">{item.companyServiceName}</h2>
          <div className="flex flex-wrap justify-start gap-4">
          {data?.data?.data?.companyServices?.map((service, index) => (
            <button
              key={index}
              className="bg-[#F0940D] text-white py-2 px-4 rounded-md tracking-wider shadow hover:bg-[#D47F0A] transition-all"
            >
           {data?.data?.data?.title}
            </button>
          ))}
        </div>
          </div>
          )}
        
        </div>
        )}





      {/* <div className="w-full">
        {data?.data?.data?.companyServices?.map((item)=>
        <div>
        <img src={item.companyServiceImageUrl} alt="Site Assessment" className="rounded-lg shadow-lg w-[50%] mx-auto" />
        <h2 className="text-3xl font-bold  mt-6 mb-4">{item.companyServiceName}</h2>
        <div className="flex flex-wrap justify-start gap-4">
        {data?.data?.data?.companyServices?.map((service, index) => (
          <button
            key={index}
            className="bg-[#F0940D] text-white py-2 px-4 rounded-md tracking-wider shadow hover:bg-[#D47F0A] transition-all"
          >
         {data?.data?.data?.title}
          </button>
        ))}
      </div>
        </div>
        )}
      
      </div> */}


      {/* Services Buttons Section */}
      {/* <div className="flex flex-wrap justify-start gap-4">
        {serviceDetails.map((service, index) => (
          <button
            key={index}
            className="bg-[#F0940D] text-white py-2 px-4 rounded-md tracking-wider shadow hover:bg-[#D47F0A] transition-all"
          >
         {data?.data?.data?.title}
          </button>
        ))}
      </div> */}
    </div>
    <Clients/>

    </>
};

export default ServiceDetails;
