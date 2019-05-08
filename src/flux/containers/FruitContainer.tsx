/*
 * The Fruit Container
 *
 * This file conntects the flux backend with the views and 
 * capsulates all the necessary logic for drawing the views
 * and updating the state as well as handling all the events
 * triggered in the views.
 *
 * @author    Ralf Lang <lang@b1-systems.de>
 * @category  React/Flux
 * @package   Fruits
 * 
 * @author    Diana Hille <hille@b1-systems.de>
 * @category  React/Flux
 * @package   Fruits
 */ 

import { Container } from 'flux/utils';
import * as React from 'react';
import FruitActions from '../actions/FruitActions';
import FruitStore from '../stores/FruitStore';
import { AddFruitView } from '../views/AddFruitView';

/*
 * 
 */

interface IState {
  length?: number,
  items: string[],
  newFruitField: string
}

/* 
 *
 * Note: The necessity to define React.Conmponent both with props and state is based on the
 * strict TypeScript guidelines (without TypeScript these are not necessary).
 */

class FruitContainerClass extends React.Component<{}, IState> {


    public static getStores() {
        return [FruitStore]
    }

    public static calculateState() {
        return {length: FruitStore.getState().fruits.length, items: FruitStore.getState().fruits}
    }

    // The ClickHandler, get it to the Child Components
    public handleClick = () => {
      FruitActions.addFruit( this.state.newFruitField );
    }

    public handleChange = (e: any) => {
      this.state = { items: this.state.items, newFruitField: e.target.value }
    }

    public listFruits() {
      const fruits = this.state.items.map((fruit:string, index:number) => 
        <li key={index}>{fruit}</li>
      );

      return fruits;
    }

    public render() {
        // TODO: Factor out to child views
        return <div><ul><li>{this.state.length}</li>{this.listFruits()}
        </ul>
        <AddFruitView value={this.state.newFruitField} onChange={this.handleChange} onClick={this.handleClick} />
        </div>
    }
}
const FruitContainer = Container.create(FruitContainerClass, { withProps: true });
export default FruitContainer;

