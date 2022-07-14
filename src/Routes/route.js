import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home, Register } from '../Pages'

const IsRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default IsRoute
