import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import FruitActions from './flux/actions/FruitActions';
import FruitStore from './flux/stores/FruitStore';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);

FruitActions.addFruit('Banana');
FruitActions.addFruit('Strawberry');


registerServiceWorker();
