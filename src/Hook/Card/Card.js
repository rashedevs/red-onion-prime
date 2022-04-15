import React from 'react';
import './Card.css'

const Card = ({ food }) => {
    const { name, img, about, price } = food
    return (
        <div className='singleCard'>
            <img style={{ width: "280px" }} src={img} alt="" />
            <h4>{name}</h4>
            <p>{about}</p>
            <h4>${price}</h4>
        </div>
    );
};

export default Card;