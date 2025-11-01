import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Shail from './shail'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Shail/>
  </StrictMode>,
)
