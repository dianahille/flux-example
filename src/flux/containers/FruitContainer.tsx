import { Container } from 'flux/utils';
import * as React from 'react';
import FruitActions from '../actions/FruitActions';
import FruitStore from '../stores/FruitStore';

interface IProps {
  children?: string;
}

class FruitContainerClass<Iprops, IState> extends React.Component<IProps, IState> {

    public static getStores() {
        return [FruitStore]
    }

    public static calculateState() {
        return {}
    }

    public render() {
        // TODO: Factor out to child views
        return <div><ul><li>{FruitStore.getState().fruits.length}</li>
        </ul>
        </div>
    }

    public componentWillMount() {
        FruitStore.addListener(this.onChange);
    }

    public onChange()
    {
        this.render();
    }

    /* Bogus usage of the FruitAction */
    public onAddFruit(fruit: string) : void
    {
        FruitActions.addFruit(fruit);
    }

}
const FruitContainer = Container.create(FruitContainerClass, { withProps: true });
export default FruitContainer;

