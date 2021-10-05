import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const OurProgrames = (props) => {
    const { description, durations, img, cls } = props.course;
    return (
        <div>
            {/* Our Program Sections */}
            <div className="col">
                <div className="card">
                    <img width="400px" height="300px" className="mx-auto pt-3 rounded rounded-4" src={img} alt="" />                    
                    <div className="card-body">
                        <h5 className="card-title">Class: {cls}</h5>
                        <p><FontAwesomeIcon icon={faClock} /> Duration: {durations}</p>
                        <p className="card-text">{description.slice(0, 100)}</p>
                        <Link to="/about">
                            <button className="btn btn-outline-info">Start Here</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProgrames;