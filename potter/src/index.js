import React from 'react';
// import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';


// const domNode = document.getElementById('root');
// const root = createRoot(domNode);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
);