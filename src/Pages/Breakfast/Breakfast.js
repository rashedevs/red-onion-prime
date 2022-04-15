import Card from '../../Hook/Card/Card';
import useFoods from '../../Hook/useFoods';
import './Breakfast.css'

const Breakfast = () => {
    const [foods, setFoods] = useFoods('breakfast.json')
    return (
        <div className='container nasta'>
            {
                foods?.map(food => <Card key={food.id} food={food}></Card>)
            }
        </div>
    );
};

export default Breakfast;