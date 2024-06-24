import React from 'react'
import AppRouter from '../routes/AppRouter'
import Header from '../molecules/Header'
import '../reset.css'
import Footer from '../molecules/Footer'
import ThemeProvider from '../theme/ThemeProvider'
import { CssBaseline } from '@mui/material'

const App = () => {
  return (
    <>
      <ThemeProvider>
        <CssBaseline />
        <Header />
        <AppRouter />
        <Footer />
      </ThemeProvider>
    </>
  )
}
export default App
