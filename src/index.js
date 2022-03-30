// modules
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// children
import App from './App';
// styles
import './shared/styles/index.scss';
import 'antd/dist/antd.css';

// context
import store from './context';

ReactDOM.render (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById ('root')
);
