import React from 'react';
// import styles from './Layout.module.css';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import toast, { Toaster } from 'react-hot-toast';
const Layout = () => {
    return<>
        <Navbar/>
        <Outlet></Outlet>
        <Toaster />
        <Footer/>
    </>
}

export default Layout;
