import React from 'react';
import { Link } from 'react-router-dom';
import"./Banner.css"
const Banner = () => {
    return (
        <div>
            <div className="imges d-flex mb-5">
                <div className="mx-4">
                    <h4 className="text-white mt-5">Admission Open (2021-2022)</h4>
                    <h1 className="text-white mt-4">A lifetime of confidence starts here Child</h1>
                    <p className="text-white mt-5 text-start">Early childhood education, also known as nursery education, is a branch of education theory that relates to the teaching of children from birth up to the age of eight. Traditionally, this is up to the equivalent of third grade. ECE is described as an important period in child development</p>
                    <Link to="/services">
                    <button className="btn btn-primary mt-4">Our Services</button>
                </Link>
                </div>
                <div>
                    <img src={ "https://demo.themewinter.com/wp/courselog/kindergarten/wp-content/uploads/sites/8/2021/04/slider-image2.png"} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;