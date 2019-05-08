import * as React from 'react';

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