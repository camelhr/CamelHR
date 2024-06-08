import React from 'react'
import ReactDOM from 'react-dom/client'
import Subdomain from './components/Subdomain.tsx'
import Domain from './components/Domain.tsx'
import { extractSubdomain } from './utils'
import './index.css'

// load the app based on the subdomain
const subdomain = extractSubdomain(window.location.hostname)
if (subdomain.length > 2 && subdomain !== 'www') {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Subdomain />
    </React.StrictMode>,
  )
} else {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Domain />
    </React.StrictMode>,
  )
}
