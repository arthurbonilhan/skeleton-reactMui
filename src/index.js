// index.js (ou App.js, dependendo da estrutura do seu projeto)
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './reset.css'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
