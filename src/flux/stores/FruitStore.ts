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
            state.fruits.push(action.fruit);
        }
        return state;
    }

    public getState() : any
    {
        return super.getState();
    }

}

export default new FruitStore();