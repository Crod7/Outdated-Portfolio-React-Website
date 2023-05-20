import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import App from './App'
import { NavbarContextProvider } from './context/NavbarContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
          <NavbarContextProvider>
              <App />
          </NavbarContextProvider>
  </React.StrictMode>
);


