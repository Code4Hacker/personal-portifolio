import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import { Loader } from './Component/Home/index';
import 'animation.css';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Loader />
        <App />
    </React.StrictMode>
);