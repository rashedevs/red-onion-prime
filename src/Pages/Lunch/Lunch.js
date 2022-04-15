import React from 'react';
import Card from '../../Hook/Card/Card';
import useFoods from '../../Hook/useFoods';
import './Lunch.css'

const Lunch = () => {
    const [foods, setFoods] = useFoods('breakfast.json')
    return (
        <div className='container my-3 lunch'>
            {
                foods?.map(food => <Card key={food.id} food={food}></Card>)
            }
        </div>
    );
};

export default Lunch;