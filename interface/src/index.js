import React from 'react';
import ReactDOM from 'react-dom';
import INTERFACE from './INTERFACE';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calculator from './components/applicatons_offline/calculator/calculator';


ReactDOM.render(
  <React.StrictMode>
    <Calculator/>
    <INTERFACE/>
  </React.StrictMode>,
  document.getElementById('root')
);

