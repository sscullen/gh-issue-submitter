import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import AppRouter, { history } from './routers/AppRouter';

import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

// import './playground/promises';

import { firebase } from './firebase/firebase';

import LoadingPage from './components/LoadingPage';

// Adding some comment to test things
const store = configureStore();

const state = store.getState();

// Higher order component to pass store to all compoents
const main_jsx = (
  <Provider store={store}><AppRouter /></Provider>
);

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(main_jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('log in occured, ', user);
    // history.push('/dashboard');

    store.dispatch(login(user.uid));

    // finished loading from firebase
    renderApp();
    if (history.location.pathname === '/') {
      history.push('/dashboard');
    }

  } else {
    console.log('log out occured ,', user);

    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});