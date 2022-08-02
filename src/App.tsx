import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthButtonsContainer from './features/auth/components/AuthButtonsContainer'
import Layout from './layouts/Layout'
import Cake from './pages/Cake'
import Home from './pages/Home'
import Search from './pages/Serach'

function App() {
  return (
    <Layout BottomSheetDefaultHeight="200px" BottomSheetChildren={<AuthButtonsContainer />}>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Cake />} path="/cake" />
        <Route element={<Search />} path="/search/:keyword" />
      </Routes>
    </Layout>
  )
}

export default App
