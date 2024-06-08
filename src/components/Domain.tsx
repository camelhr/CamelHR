import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './HomePage'
import RegisterPage from './RegisterPage'

const Domain: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Domain
