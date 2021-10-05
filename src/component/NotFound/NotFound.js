import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1 className="text-danger fs-1">404
                <br />
                <small className="text-dark">Opps! The page you are looking for was not found.</small></h1>
            
            {/* Home Button */}
            <button className='btn btn-outline-dark text-light text-center m-5'>
                <Link to='/home' className="text-decoration-none ms-3">Back to Home</Link>
            </button>
        </div>
    );
};

export default NotFound;