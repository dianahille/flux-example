/*
 * The Fruit Store
 *
 * The Fruit Store store all necessary data about its own
 * state and changes its state if the action rquires it.
 *
 * @author    Ralf Lang <lang@b1-systems.de>
 * @category  React/Flux
 * @package   Fruits
 */ 

import { ReduceStore } from 'flux/utils';
import AppDispatcher from '../dispatcher/AppDispatcher';

import FruitActions from '../actions/FruitActions';
import FruitState from './FruitState';

/*
 * The Fruit Store Class
 *
 * We use the flux ReduceStore https://facebook.github.io/flux/docs/flux-utils.html.
 * 
 * The reduce store adds some basic functionality to the stores and takes
 * the responsibility for emitting dispatches (so you do not need to compare the old
 * and the new state of the store). You will need the current dispatcher and define it
 * in the constructor (we use the getInstance() static from our AppDispatcher and 
 * don't create a new one).
 * 
 * You should define the initialState of you store. Is it empty, has it some default
 * values, etc. and define what kind of states a store accept (in our case the
 * FruitState).
 * 
 * Reducing a state changes the store's current state if the action type matches.
 * You define how the store changes its state.
 *
 * The ReduceStore needs a FruitState and a FruitAction to work. These are defined
 * by us.
 */

class FruitStore extends ReduceStore<FruitState, FruitActions> {

    /*
     * The Constructor
     *
     * Add the Dispatcher here. Try to reuse an existing dispatcher.
     */
    public constructor() {
        super(AppDispatcher.getInstance());
    }

    /*
     * Set the initial state of the store
     *
     * The initial state should be of the type FruitState (as the ReduceStore expects this
     * kind of state). You can keep the state fairly simple.
     * 
     * @return FruitState the inital state
     */
    public getInitialState(): FruitState {
        return new FruitState(['Apple', 'Pear']);
    }

    /*
     * Reduce the state
     *
     * The basic outline of the reduce function should be kept like this.
     * Switch over possible action types in the relevant action creator (keep
     * the action creator and the store together, don't create an action creator
     * for all stores but you can reuse existing action creators in this store).
     * 
     * If the called action is 'ADD_FRUIT' add the new fruit defined in action.fruit
     * to the fruits variable and create a new state based on the new array.
     * 
     * @return FruitState the updated store state
     */
    public reduce(state: any, action: any) {
        switch (action.type) {
            case 'ADD_FRUIT':
                const fruits = state.fruits;
                fruits.push(action.fruit);
                state = new FruitState(fruits);
            break;
        }
        return state;
    }

}

export default new FruitStore();