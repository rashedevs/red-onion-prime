import Card from '../../Hook/Card/Card';
import useFoods from '../../Hook/useFoods';
import './Breakfast.css'

const Breakfast = () => {
    const [foods, setFoods] = useFoods('breakfast.json')
    return (
        <div className="container my-3">
            <div className="nasta">
                {
                    foods?.map(food => <Card key={food.id} food={food}></Card>)
                }
            </div>
        </div>

    );
};

export default Breakfast;