import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { jss } from 'react-jss'
import jssNested from 'jss-nested'

jss.use(jssNested())

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);