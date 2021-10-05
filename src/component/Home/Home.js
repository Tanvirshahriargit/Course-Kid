import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import OurEvents from '../OurEvents/OurEvents';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurEvents></OurEvents>
            <About></About>
        </div>
    );
};

export default Home;