import { faClock, faStar } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const OurEvent = (props) => {
    const { name, description, durations, price, img } = props.course;
    return (
        <div>
            <div className="d-flex m-3 border border-1 p-2">
                <div>
                    <img width="400px" height="300px" className="m-2 rounded rounded-4" src={img} alt="" />
                </div>
                <div>
                    <h4>{name}</h4>

                    {/* star icons */}
                    <p>
                        <FontAwesomeIcon className="text-warning " icon={faStar} />
                        <FontAwesomeIcon className="text-warning" icon={faStar} />
                        <FontAwesomeIcon className="text-warning" icon={faStar} />
                        <FontAwesomeIcon className="text-warning" icon={faStar} />
                        <FontAwesomeIcon className="text-warning" icon={faStar} />
                    </p>
                    <p><FontAwesomeIcon className="text-info" icon={faClock} /> Duration: {durations}</p>
                    <p className="text-dark">{description.slice(0, 180)}.</p>
                    <button className="btn btn-outline-info text-dark text-center mb-3">{price}</button>
                    <br />
                    {/* More Details link */}
                    <Link to="/services">
                        <button className="btn btn-primary">More Details  <FontAwesomeIcon className="text-light" icon={faArrowRight} /> </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default OurEvent;