import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import '../src/assets/stylesheet/style.scss';
import App from './views/App';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
