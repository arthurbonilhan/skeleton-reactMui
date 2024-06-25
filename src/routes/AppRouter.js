import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AttractingCustomers, Home } from '../pages'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/captacao" element={<AttractingCustomers />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
