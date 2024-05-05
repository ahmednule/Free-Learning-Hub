import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { landingRoutes } from './Routes/Routes'

const App = () => {
  return (
    <RouterProvider router={landingRoutes} />
  )
}

export default App