import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Layout from './routes/Layout.jsx'
import Login from './Components/Login.jsx'
const router = createBrowserRouter([{
  path:'/',
  element:<Layout/>,
  children: [
    {
      path:"",
      element:<Login/>
    }
  ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)