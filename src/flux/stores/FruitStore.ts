import { ReduceStore } from 'flux/utils';
import AppDispatcher from '../dispatcher/AppDispatcher';

import FruitActions from '../actions/FruitActions';
import FruitState from './FruitState';

class FruitStore extends ReduceStore<FruitState, FruitActions> {


    public constructor() {
        super(AppDispatcher.getInstance());
    }

    public getInitialState(): FruitState {
        return new FruitState(['Apple', 'Pear']);
    }

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