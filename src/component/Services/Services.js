import React from 'react';
import Gallery from '../Gallery/Gallery';
import OurEvent from '../OurEvent/OurEvent';
import OurProgrames from '../OurProgrames/OurProgrames';
import ProgrameDetails from '../ProgrameDetails/ProgrameDetails';

const Services = () => {
    return (
        <div>
            <h1>Services 4 section here</h1>
            <OurEvent></OurEvent>
            <OurProgrames></OurProgrames>
            <ProgrameDetails></ProgrameDetails>
            <Gallery></Gallery>
        </div>
    );
};

export default Services;