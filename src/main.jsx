// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import { AuthProvider } from './AuthContext'

// GA init (keep yours)
import { initGA } from './analytics'
const id = import.meta.env.PROD ? import.meta.env.VITE_GA_ID : import.meta.env.VITE_GA_ID_DEV
initGA(id)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)
