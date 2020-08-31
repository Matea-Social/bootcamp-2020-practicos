import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import Evento from './components/Input';

ReactDOM.render(
  <React.StrictMode>
    <Evento />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
