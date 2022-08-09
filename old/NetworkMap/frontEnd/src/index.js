import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
// Remove waring
console.warn = () => {}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);