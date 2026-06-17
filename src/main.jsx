import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "bootstrap/dist/js/bootstrap.bundle.js";

import App from './App.jsx'
import AuthContext from './context/Auth.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContext>
        <App />
      </AuthContext>
    </BrowserRouter>
  </StrictMode>,
)