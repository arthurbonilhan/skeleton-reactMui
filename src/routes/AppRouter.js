// AppRouter.js
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AttractingCustomers, Home, AboutUs } from '../pages'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/captacao" element={<AttractingCustomers />} />
      <Route path="/sobre" element={<AboutUs />} />
    </Routes>
  )
}

export default AppRouter
