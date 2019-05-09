/*
 * The Button
 *
 * The basic react component to draw an input field. The
 * component manages the onChange event handler and the
 * state value of the input field.
 * 
 * @author    Diana Hille <hille@b1-systems.de>
 * @category  React/Flux
 * @package   Fruits
 */ 

import * as React from 'react';

/*
 * To keep it simple the interface interpretes all given
 * properties as any type. The interface consists of the 
 * onChange event handler and the current state value of
 * the input field.
 */

interface IInputField {
    onChange: any,
    value: any
}

export class InputField extends React.Component<IInputField> {
    public render() {
        return (
            <input type="text" value={this.props.value} onChange={this.props.onChange} />
        )
    }
}