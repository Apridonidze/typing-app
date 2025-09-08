import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './containers/App'

import { Buffer } from 'buffer';

// Example usage
const buf = Buffer.from('Hello world', 'utf-8');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
