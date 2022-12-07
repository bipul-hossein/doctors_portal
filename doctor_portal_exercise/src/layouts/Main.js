import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Share/Footer';
import Nav from '../components/Share/Nav';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;