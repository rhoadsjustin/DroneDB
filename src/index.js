import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import dotenv from 'dotenv';
import './index.css';

dotenv.config({path: './.env'})
ReactDOM.render(
  <App
  url='https://dronedatabase.herokuapp.com/api/parts' />,
   document.getElementById('root')
 );
registerServiceWorker();
