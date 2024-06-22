import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/landing-page" element={<LandingPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
