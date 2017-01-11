import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Encabezado from './components/encabezado';
import Lalala from './components/lalala';
import './index.css';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

ReactDOM.render(
    <Encabezado />,
    document.getElementById('header')
);

ReactDOM.render(
    <Lalala />,
    document.getElementById('lalala')
);
