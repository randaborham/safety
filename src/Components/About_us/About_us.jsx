import React from 'react';
import AboutUsLayer from '../Layers/About_usLayer.jsx';
import Clients from '../Clients/Clients.jsx';
import SafetyConsultants from './About_Content/Content.jsx';
import OurAchievements from './Achievements/Our_Achievements.jsx';
import Layer from './ِAbout-Layer/Layer.jsx';

const AboutUs = () => {
    return <>
        <AboutUsLayer/>
        <SafetyConsultants/>
        <OurAchievements/>
        <Layer/>
        <Clients/>
    </>
}

export default AboutUs;
