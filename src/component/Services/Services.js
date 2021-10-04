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
            } ,
                
            <h1 className="bg-dark p-5 text-light my-4">Our Program</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 ms-2">
                {
                
                courses.map(course => <OurProgrames
                    key={course.id}
                    course={course}
                    
                ></OurProgrames>  
                )
            } 
            </div>,
            <h1 className="bg-dark p-5 text-light my-4">Gallery</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 ms-2">
                {
                
                courses.map(course => <Gallery
                    key={course.id}
                    course={course}
                    
                ></Gallery>  
                )
            } 
            </div>
        </div>
        </>
    );
};

export default Services;