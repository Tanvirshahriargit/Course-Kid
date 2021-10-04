import React, { useEffect, useState } from 'react';
import Gallery from '../Gallery/Gallery';
import OurEvent from '../OurEvent/OurEvent';
import OurProgrames from '../OurProgrames/OurProgrames';
import ProgrameDetails from '../ProgrameDetails/ProgrameDetails';

const Services = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("./fakedata.json")
            .then(res => res.json())
        .then(data=>setCourses(data))
            
    },[])
    return (
        <>
        <div>
            <h1>Services 4 section here</h1>
            {
                courses.map(course => <OurEvent
                    key={course.id}
                    course={course}
                    
                ></OurEvent>  
                )
            },
                <h1 className="bg-dark p-5 text-light my-4">Programmes Descriptions</h1>
            {
                
                courses.map(course => <ProgrameDetails
                    key={course.id}
                    course={course}
                    
                ></ProgrameDetails>  
                )
            }   
        </div>
        </>
    );
};

export default Services;