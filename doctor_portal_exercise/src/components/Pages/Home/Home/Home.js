import React, { useContext } from 'react';
import { authContext } from '../../../../contexts/AuthProvider';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    const {me}=useContext(authContext)
    console.log(me)
    return (
        <div>
           <Banner></Banner>
           <InfoCards></InfoCards>
           <Services></Services>
           <MakeAppointment></MakeAppointment>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;