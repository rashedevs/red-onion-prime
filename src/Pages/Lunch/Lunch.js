import React from 'react';
import Card from '../../Hook/Card/Card';
import useFoods from '../../Hook/useFoods';
import './Lunch.css'

const Lunch = () => {
    const [foods, setFoods] = useFoods()
    const lunch = foods.filter(food => food.category === 'lunch')
    return (
        <div className='container my-3 lunch'>
            {
                lunch?.map(food => <Card key={food.id} food={food}></Card>)
            }
        </div>
    );
};

export default Lunch;