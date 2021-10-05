import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>404 Not Found Anything</h1>
            <button className='btn btn-outline-dark text-light text-center m-5'>
                <Link to='/home' className="text-decoration-none ms-3">Back to Home</Link>
            </button>
        </div>
    );
};

export default NotFound;