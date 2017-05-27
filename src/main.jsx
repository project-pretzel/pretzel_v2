import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Landing from './components/Landing.jsx';

injectTapEventPlugin();

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HashRouter>
      <Route path="/" component={Landing} />
    </HashRouter>,
    document.getElementById('mount'),
  );
});
