import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/js/dist/collapse.js'
import 'bootstrap/js/dist/offcanvas'
import 'bootstrap/js/dist/dropdown'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


