import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/App.jsx';

injectTapEventPlugin();

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('mount'),
  );
});
