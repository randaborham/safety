import React from 'react';
import AboutUsLayer from '../../Layers/About_usLayer.jsx';
import Clients from '../../Clients/Clients.jsx';
import ServiceCradPage from './ServiceCradPage.jsx';

const ServicePage = () => {
    return <>
        <AboutUsLayer/>

        <ServiceCradPage/>
        <Clients/>
        </>
}

export default ServicePage;
