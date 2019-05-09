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
 * The definition of the interface for the state type
 *
 * Note: if you want to use type operators on these properties define the properties
 * without the ?-operator. The ?-operator allows the properties to be undefined, which
 * conflicts with most of the type operators.
 * 
 * @param fruitAmount       number or undefined - the current amount of fruits in the store
 * @param fruitArray        array of string - a list of fruit names in the store
 * @param fruitInputValue   string - the value of the input field for adding a new fruit to the store
 */

interface IState {
  fruitAmount?: number,
  fruitArray: string[],
  fruitInputValue: string
}

/* 
 * The Fruit Container Class
 *
 * The most basic view will be rendered here and all event logic is handled here.
 * We use this class as flux container (https://facebook.github.io/flux/docs/flux-utils.html).
 * A container updates its state when relevant stores change. So you don't need to handle
 * the update and change events by yourself. Just add the relevant store (getStores) and
 * calculate your new state based on the changes to the store (calculateState).
 *
 * Note: The necessity to define React.Conmponent both with props and state is based on the
 * strict TypeScript guidelines (without TypeScript these are not necessary).
 */

class FruitContainerClass extends React.Component<{}, IState> {

    /*
     * @return all Stores defined for this container
     */
    public static getStores() {
        return [FruitStore]
    }

    /*
     * @return the new state of the container
     */
    public static calculateState() {
        return {fruitAmount: FruitStore.getState().fruits.length, fruitArray: FruitStore.getState().fruits}
    }

    /* 
     * Define logic and handlers here to get controlled components
     * Controlled components are the base feature of react and we should stick to it.
     * 
     * A Controlled Component is one that takes its current value through props and notifies changes through 
     * callbacks like onChange. A parent component "controls" it by handling the callback and managing its own 
     * state and passing the new values as props to the controlled component. You could also call this a "dumb component".
     * 
     * A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find 
     * its current value when you need it. This is a bit more like traditional HTML.
     */

    /*
     * This function handles the click event created on a child component.
     * This handler sets the value of an input field as new parameter for
     * the action creator to add a new fruit to the store.
     *
     * You have to inherit the click handler through all child components to
     * the point where the event should be triggered. The react components will
     * do the rest and hand over the triggered event to the parent to actually
     * handle the event.
     * 
     * If you just want to check, if an event was triggered, use the following
     * funktion base with "handleEvent = () => { doStuffHere(); }"
     */
    public handleClick = () => {
      FruitActions.addFruit( this.state.fruitInputValue );
    }

    /*
     * This function handles the change event created on a child component.
     * If the input field was changed, the value is saved to the current state
     * of the component to track its content.
     *
     * The change event is necessary to check if an input or text field was
     * edited and to inform the parent about the change. This is the correct
     * way to handle reading an input or text field. Don't go the JS-way of
     * reading the DOM-element directy.
     * 
     * I'm not sure what kind of type TypeScript assumes for events, but
     * any seems to do the trick. You want to get the value of an event
     * via event.target.value.
     */
    public handleChange = (e: any) => {
      this.state = { fruitArray: this.state.fruitArray, fruitInputValue: e.target.value }
    }

    /*
     * This is a helper function for generating a list of smaller react components
     * out of the fruitsArray. Map works just like a forEach, always use an index,
     * because reacts wants its elements with specific keys.
     * 
     * @return a JSX-element of the given array
     */
    public listFruits() {
      const fruits = this.state.fruitArray.map((fruit:string, index:number) => 
        <li key={index}>{fruit}</li>
      );

      return fruits;
    }

    /*
     * The render-function to draw the HTML outline.
     *
     * Hand over the onChange and onClick handler here to child components
     * and just handle the results. Leave the drawing of the HTML elemtns to
     * the child compoment views and just to the logic behind it.
     */
    public render() {
        // TODO: Factor out to child views
        return <div><ul><li>{this.state.fruitAmount}</li>{this.listFruits()}
        </ul>
        <AddFruitView value={this.state.fruitInputValue} onChange={this.handleChange} onClick={this.handleClick} />
        </div>
    }
}

// Create the flux container
const FruitContainer = Container.create(FruitContainerClass, { withProps: true });

// Export the container to the calling component
export default FruitContainer;

