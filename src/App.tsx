import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoginButtons } from './features/auth/components/LoginButtons'
import Layout from './layouts/Layout'
import Cake from './pages/Cake'
import Home from './pages/Home'

function App() {
  return (
    <Layout BottomSheetDefaultHeight="200px" BottomSheetChildren={<LoginButtons />}>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Cake />} path="/cake" />
        <Route element={<Home />} path="/search" />
      </Routes>
    </Layout>
  )
}

export default App
