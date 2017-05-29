import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import allReducers from './reducers/rootReducer';
import App from './components/App.jsx';

injectTapEventPlugin();

const store = createStore(allReducers);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('mount'),
  );
});
