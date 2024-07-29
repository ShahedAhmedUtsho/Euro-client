import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css' 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Routes from './Routes/Routes.jsx';
import Home from './pages/Admin/Home/Home.jsx';
import Register from './pages/Register/Register.jsx';
import Login from './pages/Login/Login.jsx';
import Provider from './Provider/Provider.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes/>,
    children:[
      {
        path:"/",
        element: <Home/>,
      },
      {
        path:'/Login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider>
    <RouterProvider router={router} />

    </Provider>
    
  // </React.StrictMode>,
)
