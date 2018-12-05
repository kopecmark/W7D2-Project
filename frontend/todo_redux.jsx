import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';
import {fetchTodos} from './actions/todo_actions';
import thunk from './middleware/thunk';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);
  const root = document.getElementById('content');
  window.fetchTodos = fetchTodos;
  window.thunk = thunk;
  window.store = store;
  ReactDOM.render(<Root store={store} />, root);
});
