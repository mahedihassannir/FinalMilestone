import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/router'

import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <div className='lg:w-11/12 mx-auto'>

      <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>

      </HelmetProvider>

    </div>

  </React.StrictMode>,
)
