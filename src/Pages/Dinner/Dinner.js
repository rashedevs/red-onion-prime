import React from 'react';
import Card from '../../Hook/Card/Card';
import useFoods from '../../Hook/useFoods';
import './Dinner.css'

const Dinner = () => {
    const [foods, setFoods] = useFoods()
    const dinner = foods.filter(food => food.category === 'dinner')
    return (
        <div className='container my-3 dinner'>
            {
                dinner?.map(food => <Card key={food.id} food={food}></Card>)
            }
        </div>
    );
};

export default Dinner;