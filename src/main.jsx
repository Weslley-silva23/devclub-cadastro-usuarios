
import React from 'react'

import ReactDOM  from 'react-dom/client'
import {RouterProvider} from  'react-router-dom'
import { GlobalStles } from './assets/styles/Globalstyles.js'
import router from '../routes.jsx'


ReactDOM(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStles/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
