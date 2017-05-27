import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Landing from './components/Landing.jsx';

injectTapEventPlugin();

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
      <Route path="/" component={Landing} />
    </BrowserRouter>,
    document.getElementById('mount'),
  );
});
