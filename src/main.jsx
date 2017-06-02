import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App.jsx';
import configureStore from './store';

injectTapEventPlugin();


async function init() {
  const store = await configureStore();

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('mount'),
  );
}

init();
