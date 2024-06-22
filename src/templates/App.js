import React from 'react'
import AppRouter from '../routes/AppRouter'
import Header from '../molecules/Header'
import '../reset.css'

const App = () => {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  )
}
export default App
