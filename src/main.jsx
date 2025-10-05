import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

// Import Google Analytics helper
import { initGA } from './analytics'

// Get GA ID from .env (uses dev ID locally, prod ID when deployed)
const id = import.meta.env.PROD
  ? import.meta.env.VITE_GA_ID
  : import.meta.env.VITE_GA_ID_DEV

// Start Google Analytics before app loads
initGA(id)

// Render the React app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
