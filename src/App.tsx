import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { LoginButtons } from './features/auth/components'
import LoggedinButtons from './features/auth/components/LoggedinButtons'
import { UserSelector } from './features/auth/recoil/selectors/UserSelector'
import Layout from './layouts/Layout'
import Cake from './pages/Cake'
import Home from './pages/Home'

function App() {
  const { isLoggedIn } = useRecoilValue(UserSelector)

  return (
    <Layout
      BottomSheetDefaultHeight="200px"
      BottomSheetChildren={!isLoggedIn ? <LoginButtons /> : <LoggedinButtons />}
    >
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Cake />} path="/cake" />
        <Route element={<Home />} path="/search" />
      </Routes>
    </Layout>
  )
}

export default App
