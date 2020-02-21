import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import store from './modules/store'
import App from './app'

import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

serviceWorker.unregister();
