import React from 'react'

import ReactDOM from 'react-dom/client'

import App from './App.jsx'

import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/home.jsx'
import Produtos from './components/Produtos.jsx'
import EditarProdutos from './components/EditarProduto.jsx'
import Error from './components/Error.jsx'

const router = createBrowserRouter([
  {path:"/" , element: <App/>, children:[

    {path: "/Home", element: <Home/>}
  ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)

