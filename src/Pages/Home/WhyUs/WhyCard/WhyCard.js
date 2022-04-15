import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './WhyCard.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const WhyCard = ({ food }) => {
    const { img, name, about, _img } = food
    return (
        <div className='container why'>
            <img style={{ height: "300px", width: "350px" }} src={img} alt="" />
            <h4 className='mt-3'>
                <img style={{ width: "40px" }} className="me-3" src={_img} alt="" />
                {name}
            </h4>
            <p> <small>{about.slice(0, 100)}.. </small> <br />
                <Link to="">see more <FontAwesomeIcon className='arrow' icon={faArrowRight}></FontAwesomeIcon></Link>
            </p>
        </div>
    );
};

export default WhyCard;