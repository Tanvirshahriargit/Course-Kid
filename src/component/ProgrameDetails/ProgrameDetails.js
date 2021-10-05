import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ProgrameDetails = (props) => {
    const { name, description, durations, price, img } = props.course;
    return (
        <div>
            <div className=" mt-2 p-2">
                <img width="700px" height="300px" src={img} alt="" srcset="" />
                <br />
                <h4 className="m-2">{name}</h4>
                <h3>Descriptions</h3>
                <p className="w-50 h-50 text-center mx-auto">{description}</p>
                <h5>Duration</h5>
                <p><FontAwesomeIcon className="text-info" icon={faClock} />  {durations}</p>
                <h5>Price</h5>
                <p>{price}</p>
                <h4>Here Is Videos Link</h4>
                <p><iframe width="560" height="315" src="https://www.youtube.com/embed/l2BAM76LTWU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
            </div>
        </div>
    );
};

export default ProgrameDetails;