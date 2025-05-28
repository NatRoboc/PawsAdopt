import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Vista/index.css'
import App from './Vista/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
