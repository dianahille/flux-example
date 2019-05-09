/*
 * The Fruit Actions
 *
 * The action creator for the fruits application and the fruits store.
 * Kepp all action types located here. The action creator should only
 * focus on one part of the application.
 *
 * @author    Ralf Lang <lang@b1-systems.de>
 * @category  React/Flux
 * @package   Fruits
 */ 

import AppDispatcher from '../dispatcher/AppDispatcher';

/*
 * The action creator for the Fruit Store
 *
 * It currently only has the action 'ADD_FRUIT', which adds
 * a new string element to the Fruit Store.
 * 
 * You need the Dispatcher here. Use the getInstance method to
 * reuse a current dispatcher. Don't create a new one.
 */

class FruitActions
{
    /*
     * Adds a new element to the store
     */
    public static addFruit(newFruit: string): any
    {
        AppDispatcher.getInstance().dispatch({
            fruit: newFruit,
            type: "ADD_FRUIT"
        });
    }
}

export default FruitActions;