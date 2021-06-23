// importation de chacune des pages
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // App + Browser = Rooter
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render (
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
    // Renvoyer browser + App dans fichier index.html div id root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();