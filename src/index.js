import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import s from './App.module.css';
ReactDOM.render(
  <React.StrictMode>
    <App className={s.app}/>
  </React.StrictMode>,
  document.getElementById('root'),
);
