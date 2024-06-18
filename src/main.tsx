import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import Subdomain from './components/Subdomain.tsx'
import Domain from './components/Domain.tsx'
import { store } from './state/store'
import { extractSubdomain } from './utils'
import './index.css'

// load the app based on the subdomain
const subdomain = extractSubdomain(window.location.hostname)
if (subdomain.length > 2 && subdomain !== 'www') {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Provider store={store}>
        <Subdomain />
      </Provider>
    </React.StrictMode>,
  )
} else {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Provider store={store}>
        <Domain />
      </Provider>
    </React.StrictMode>,
  )
}
