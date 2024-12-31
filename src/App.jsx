import React from 'react'
import { Navigation } from './Components/index'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Navigation/>
      <Outlet />
    </>
  )
}

export default App
