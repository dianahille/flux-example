import { Container } from 'flux/utils';
import * as React from 'react';
import FruitStore from '../stores/FruitStore';

interface IProps {
  children?: string;
}
interface IState {
  length?: number;
  items?: string[];
}

class FruitContainerClass extends React.Component<IProps, IState> {

    public static getStores() {
        return [FruitStore]
    }

    public static calculateState() {
        return {length: FruitStore.getState().fruits.length}
    }

    public render() {
        // tslint:disable-next-line:no-console
        console.log("in render" + this.state);
        // TODO: Factor out to child views
        return <div><ul><li>4</li>
        </ul>
        </div>
    }
}
const FruitContainer = Container.create(FruitContainerClass, { withProps: true });
export default FruitContainer;

