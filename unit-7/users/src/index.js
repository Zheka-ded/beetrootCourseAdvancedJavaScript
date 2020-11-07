import React from 'react';
import ReactDOM from 'react-dom';
import AppClasses from './components/classes/appClasses/AppClasses';
import AppFunctions from './components/functions/appFunctions/AppFunctions';
// import UserService from './services/UserService';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
      <AppClasses />
      <AppFunctions />
  </React.StrictMode>,
  document.getElementById('root')
);