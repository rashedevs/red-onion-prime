import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner  my-2'>
            <div className='field'>
                <input type="text" placeholder="Search food items" aria-label="Search" />
                <button type="submit" size="sm" color="unique" className="mr-auto rounded-pill">Search</button>
            </div>
        </div>
    );
};

export default Banner;