import { StrictMode } from 'react'; //importing react strictmode from react
import { createRoot } from 'react-dom/client'; // importing root from react
import './index.css'; //importing main style file
import App from './containers/App'; //importing main parent component

import { Buffer } from 'buffer'; //importing buffer package (to avoid buffer error)

const buf = Buffer.from('Hello world', 'utf-8'); //using buffer

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);//react root