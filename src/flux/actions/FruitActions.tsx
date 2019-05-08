import AppDispatcher from '../dispatcher/AppDispatcher';

class FruitActions
{
    public static addFruit(newFruit: string): any
    {
        AppDispatcher.getInstance().dispatch({
            fruit: newFruit,
            type: "ADD_FRUIT"
        });
    }
}

export default FruitActions;