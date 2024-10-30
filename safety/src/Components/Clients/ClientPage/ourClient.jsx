import React from 'react';
import AboutUsLayer from '../../Layers/About_usLayer';
import axios from 'axios';
import { useQuery } from 'react-query';

const OurClients = () => {

 function getclient(){

  return axios.get(`https://camp-coding.site/safty/api/categories`)

}
let {data} = useQuery("alldata", getclient)
console.log(data?.data?.data)

  return <>    
  
  <AboutUsLayer/>
  <div className="p-8 textNav">
      {/* Section Header */}
      <h1 className="text-center text-2xl font-bold mb-6 main-color">Our Clients</h1>
      {data?.data?.data?.map((item)=> <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">{item.categoryName}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {
            item?.Clients?.map((client)=>
              <div className=" p-2 flex justify-center items-center">
        <img src={client?.clientImageUrl} alt={client.name} className=" w-[400px]" />
       </div>
            )
          } 
        </div>
      </div> )} 
    </div>
    </>

};

export default OurClients;
