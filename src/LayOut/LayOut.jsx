import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const LayOut = () => {
    return (
        <div>
            <>
            <Header/>
            <Navbar/>
            <Outlet/>
            <Footer/>
            </>
        </div>
    );
};

export default LayOut;