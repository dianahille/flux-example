import * as React from 'react';
import { Button } from './Button';
import { InputField } from './InputField';

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