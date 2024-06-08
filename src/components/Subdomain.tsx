import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './app/App'
import LoginPage from './LoginPage'

const Subdomain: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Subdomain
