/*
 * The Button
 *
 * The basic react component to draw a button. The
 * button is the last element to get the onClick event
 * handler and it hands over the result back to the
 * parent element.
 * 
 * @author    Diana Hille <hille@b1-systems.de>
 * @category  React/Flux
 * @package   Fruits
 */ 

import * as React from 'react';

/*
 * To keep it simple the interface interpretes all given
 * properties as any type. The interface consists of the onClick
 * event handler.
 */

interface IButton {
    onClick: any
}

export class Button extends React.Component<IButton> {
    public render() {
        return (
            <button type="button" onClick={this.props.onClick}>Button</button>
        )
    }
}