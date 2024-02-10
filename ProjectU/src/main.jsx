//Librearias de React
import React from 'react'
//Espacio para hacer render
import ReactDOM from 'react-dom/client'
//Para donde podemos ir
import {RouterProvider} from 'react-router-dom'


//Importar el router
import router from './routes/router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)

