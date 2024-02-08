import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import Routers from './routes/Routers.jsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './Provider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import {  QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
  <AuthProvider>
  <HelmetProvider>
   <RouterProvider router={Routers} ></RouterProvider>
   </HelmetProvider>
   <Toaster></Toaster>
  </AuthProvider>

  </React.StrictMode>
    </QueryClientProvider>
 ,
)
