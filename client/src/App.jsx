import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { landingRoutes } from './Routes/Routes'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <RouterProvider router={landingRoutes} />
      <div><Toaster/></div>
    </div>
  )
}

export default App