import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Loader } from './Component/Home/index';
import 'animation.css';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path:'/',
        element:<div><Loader/><App/></div>
    }
]);
root.render(
    <React.StrictMode>
     <RouterProvider router={router}/>
    </React.StrictMode>
);