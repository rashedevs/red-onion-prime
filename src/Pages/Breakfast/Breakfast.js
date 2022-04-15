import Card from '../../Hook/Card/Card';
import useFoods from '../../Hook/useFoods';
import './Breakfast.css'

const Breakfast = () => {
    const [foods, setFoods] = useFoods()
    const breakfast = foods.filter(food => food.category === 'breakfast')
    return (
        <div className="container my-3">
            <div className="nasta">
                {
                    breakfast?.map(food => <Card key={food.id} food={food}></Card>)
                }
            </div>
        </div>

    );
};

export default Breakfast;