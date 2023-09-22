import React from 'react';
import Banner from '../Banner/Banner';
import Infocard from '../Infocard/Infocard';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Infocard></Infocard>
            <Services></Services>
        </div>
    );
};

export default Home;