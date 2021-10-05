import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import OurEvent from '../OurEvent/OurEvent';

const OurEvents = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("./fakedata.json")
            .then(res => res.json())
            .then(data => setCourses(data))

    }, [])
    return (
        <div>
            {
                    courses.map(course => <OurEvent
                        key={course.id}
                        course={course}

                    ></OurEvent>
                    )
            }
        </div>
    );
};

export default OurEvents;