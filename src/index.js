import React from 'react';
import ReactDOM from 'react-dom';
import '.';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/style.css';
import 'semantic-ui-css/semantic.min.css';



ReactDOM.render(<App />, document.getElementById('root'));
<React.StrictMode>

<App />

</React.StrictMode>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();