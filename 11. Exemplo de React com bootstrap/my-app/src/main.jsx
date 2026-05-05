import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './dist/css/bootstrap.css'
import './dist/js/bootstrap.js'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Arquivo de importação para uso global