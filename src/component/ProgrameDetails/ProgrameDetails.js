import React from 'react';

const ProgrameDetails = (props) => {
    const { name, description, durations, schedule, price, img } = props.course;
    return (
        <div>
            <img width="700px" height="350px" src={img} alt="" srcset="" />
            <br />
            <h1>Descriptions</h1>
            <p>{ description}</p>
        </div>
    );
};

export default ProgrameDetails;