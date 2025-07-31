import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ComponentUseReducer } from './Components/ComponentUseReducer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ComponentUseReducer/>
  </StrictMode>,
)
