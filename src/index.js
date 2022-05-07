import React from 'react';
// to jest w package.json i jest zainstalowane lokalnie. 

import ReactDOM from 'react-dom/client';
// to jest w package.json i jest zainstalowane lokalnie.
// One razem tworzą całą bibliotekę.

import './index.css';
// import css'a

import App from './App';
// import componentu App.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Wywołanie componentu App*/}
  </React.StrictMode>
);
