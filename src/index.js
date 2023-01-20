import React from 'react';
import ReactDOM from 'react-dom';
import '.';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/style.css';
import 'semantic-ui-css/semantic.min.css';
import { render } from 'react-dom'; // <- This is the correct import // statement for React version 17



const root = document.getElementById('root'); // <- This is the //correct method call for React version 17

render(

    <React.StrictMode>
  
      <App />
  
    </React.StrictMode>,
  
    root
  
  );
  