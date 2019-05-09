/*
 * The AddFruitView
 *
 * The basic react component to draw all elements for
 * the addtion functionality. No logic here, it hands
 * over its own properties.
 * 
 * @author    Diana Hille <hille@b1-systems.de>
 * @category  React/Flux
 * @package   Fruits
 */ 

import * as React from 'react';
import { Button } from './Button';
import { InputField } from './InputField';

/*
 * To keep it simple the interface interpretes all given
 * properties as any type. The interface consists of the onClick
 * and onChange event handler and the current state value of
 * the input field.
 */

interface IAddFruits {
    onClick: any,
    onChange: any,
    value: any
}

export class AddFruitView extends React.Component<IAddFruits> {

    public render() {
        return (
            <div>
                <InputField value={this.props.value} onChange={this.props.onChange} />
                <Button onClick={this.props.onClick} />
            </div>
        )
    }
}