import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import Routers from './routes/Routers.jsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <HelmetProvider>
   <RouterProvider router={Routers} ></RouterProvider>
   </HelmetProvider>
  </React.StrictMode>,
)
