//librearias de react
import React from 'react'
import { createBrowserRouter } from 'react-router-dom';

//paginas
import About from "../pages/About";
import Home from "../pages/Home";
import NotFound from '../pages/NotFound';
import VerApi from "../pages/Verapi";
import Layout from '../layout/layout';

//Componente base 
const router = createBrowserRouter([
    { 
        //Cargue el Layout
        path: '/',
        element: <Layout></Layout>,
        errorElement: <NotFound></NotFound>,
        children: [
            { 
                errorElement: <NotFound></NotFound>,
                children: [
                    { 
                        path: '/', element: <Home></Home> 
                    },
                    { 
                        path: '/about', element: <About></About> 
                    },
                    { 
                        path: '/verapi', element: <VerApi></VerApi> 
                    }
                ]
            }
        ]
    }
])

export default router;