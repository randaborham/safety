import React from 'react';
// import styles from './Clients.module.css';
import CardClients from '../All_Cards/CardClients.tsx';

const Clients = () => {
    return <>
        <div className="Clients">
            <h1 className='textNav main-color lg:text-[36px] lg:font-normal font-medium text-[20px] text-center'>Our management team led many diversful consulting services</h1>
       
        <CardClients/>
        </div>
    
    </>
}

export default Clients;
