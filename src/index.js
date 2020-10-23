import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Routes from './routes';
import Header from './character/Header/Header';

ReactDOM.render(
    <Provider store={store}>
      <Header />
      <Routes />
    </Provider>,
  document.getElementById('root')
);
