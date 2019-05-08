import * as React from 'react';

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