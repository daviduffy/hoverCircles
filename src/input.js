require('./assets/stylesheets/app.sass');

import React from 'react';
import ReactDOM, { render } from 'react-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));