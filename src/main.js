import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import Landing from './components/Landing';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Landing />,
    document.getElementById('mount'),
  );
});
