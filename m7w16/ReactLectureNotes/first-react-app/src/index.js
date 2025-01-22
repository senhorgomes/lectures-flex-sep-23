import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// It targets the 'root' div
// We create our React DOM
// We connect them together
// And render any components we import
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>
);

