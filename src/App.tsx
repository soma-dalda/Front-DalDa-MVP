import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthButtonsContainer from './features/auth/components/AuthButtonsContainer'
import Layout from './layouts/Layout'

const Home = React.lazy(() => import('./pages/Home'))
const Cake = React.lazy(() => import('./pages/Cake'))
const Serach = React.lazy(() => import('./pages/Serach'))

function App() {
  return (
    <Layout BottomSheetDefaultHeight="200px" BottomSheetChildren={<AuthButtonsContainer />}>
      <Suspense>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Cake />} path="/cake" />
          <Route element={<Serach />} path="/search" />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App
