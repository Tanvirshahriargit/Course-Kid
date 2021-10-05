import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1 className="bg-dark p-5 text-light my-4">About Us</h1>
            {/* Left Side About Sections */}
            <div className="d-flex">
                <div>
                    <img className="img-fluid p-4" width="700px" src={'https://www.rd.com/wp-content/uploads/2016/04/33-your-childs-teacher-happy-kids-classroom.jpg'} alt="" />
                </div>

                {/* right side About Sections */}
                <div className="p-4 text-start border-top border-info">
                    <h1>Why You Learn
                        <br />
                        Education</h1>
                    <h4>We believe that human rights of a child
                        <br />
                        <small className="text-primary">are non-negotiable.</small></h4>
                    <p className="mt-3">We pride ourselves on being able to provide happy,safe inclusive environment
                        <br />  which children aged two and a half to five years old.
                    </p>
                    <Link to="/services">
                        <button className="btn btn-primary mt-4">Our Services</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;