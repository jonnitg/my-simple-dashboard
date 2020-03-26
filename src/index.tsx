import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'routes';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import configureStore from '_redux/store/configureStore';
import * as serviceWorker from './serviceWorker';
import './sass/main.scss';

const store = configureStore();
const history = createBrowserHistory();
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router history={history}>
        <Routes />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
