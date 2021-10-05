import React from 'react';
import "./Gallery.css"
const Gallery = (props) => {
    const { img } = props.course;
    return (
        <div>
            <div className="col">
                <div className="card">
                    {/* Hover Effect */}
                    <img width="400px" height="300px" className="py-3 ps-3 hovers" src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;