// tslint:disable-next-line:no-import-side-effect
import 'tslib';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import RootContainer from './containers/RootContainer';
import store from './store';
import './styles/index.scss';

const Root = () => (
  <div>
    <Provider store={store}>
      <RootContainer />
    </Provider>
  </div>
);

render(<Root />, document.getElementById('root'));
