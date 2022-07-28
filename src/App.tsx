import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Cake from './pages/Cake'
import Home from './pages/Home'

function App() {
  return (
    <Layout
      BottomSheetDefaultHeight="200px"
      BottomSheetChildren={
        <div className="h-full flex flex-col justify-center">
          <div className="w-full h-8 my-2">
            <button
              className="border-none bg-white w-full justify-center text-md text-yellow-500"
              type="button"
            >
              카카오 계정으로 로그인
            </button>
          </div>
          <div className="w-full h-8 my-2">
            <button
              className="border-none bg-white w-full justify-center text-md text-green-600"
              type="button"
            >
              네이버 계정으로 로그인
            </button>
          </div>
          <div className="w-full h-8 my-2">
            <button
              className="border-none bg-white w-full justify-center text-md text-gray-600"
              type="button"
            >
              구글 계정으로 로그인
            </button>
          </div>
        </div>
      }
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
