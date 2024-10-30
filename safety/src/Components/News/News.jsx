

import React from "react";
import AboutUsLayer from "../Layers/About_usLayer";
import Clients from "../Clients/Clients";

import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../loading/Loading";


const NewsCard = ({ title, date, imageSrc }) => (
  <div className="bg-white rounded-lg textNav shadow-lg cursor-pointer">
    <img src={imageSrc} alt={title} className="w-full h-[250px] rounded-t-lg" />
    <div className="content">
      <h3 className="mt-4 text-lg font-bold p-2">{title}</h3>
      <div className="text-center p-3 border-b">
        <Link to={date}>
          <button className="bg-[#F0940D] text-white px-8 py-1 rounded-md tracking-widest">
            Visit
          </button>
        </Link>
      </div>
    </div>
  </div>
);

const News = () => {
   async function getnews() {
    return await axios.get(`https://camp-coding.site/safty/api/company-news`);
  }


  let { data, isLoading, isError } = useQuery("alldata", getnews);


  console.log(data?.data?.data);

  return (
    <>
      <AboutUsLayer />
      <div className="p-8 textNav">
        {/* Section Header */}
        <h1 className="text-center text-4xl font-bold mb-6 main-color">
          Our News
        </h1>
        {isLoading ? (
          <div className="flex justify-center items-center">
<Loading/>
          </div>
        ) : isError ? (
          <div className="flex justify-center items-center">
            <p className="text-red-500 text-xl">Error loading news.</p>
          </div>
        ) : (
          <div className="container mx-auto px-2">
        
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data?.data?.data?.map((newsItem, index) => (
                <NewsCard
                  key={index}
                  title={newsItem.companyNewTitle}
                  date={newsItem.companyNewUrl}
                  imageSrc={newsItem.companyNewImageUrl}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <Clients />
    </>
  );
};

export default News;
