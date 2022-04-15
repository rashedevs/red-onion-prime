import React from 'react';
import useFoods from '../../../Hook/useFoods';
import WhyCard from './WhyCard/WhyCard';
import './WhyUs.css'

const WhyUs = () => {
    const [foods, setFoods] = useFoods('icon1.json');
    return (
        <div className='container mx-auto my-3'>
            <div className='mb-4'>
                <h4 className='text-primary fw-bold'>Why You Choose us!</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolorum earum at voluptates nihil repudiandae inventore aperiam maxime tempora dolores!</p>
            </div>
            <div className='reviews'>
                {
                    foods?.map(food => <WhyCard key={food.id} food={food}></WhyCard>)
                }
            </div>
        </div>
    );
};

export default WhyUs;