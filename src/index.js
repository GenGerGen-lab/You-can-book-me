import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './pages/App';
import './assets/css/style.css';

ReactDOM.render(<App />, document.getElementById(`root`));

if (module.hot) {
  module.hot.accept();
}
