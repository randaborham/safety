import React from 'react';
import Services from '../Services/ServicesSections';
import Clients from '../Clients/Clients';
import Carousel from './Carousel/Carousel';



const Home = () => {
    return<>
    <Carousel/>
   

    <Services/>
    <Clients/>
    </>
}

export default Home;
