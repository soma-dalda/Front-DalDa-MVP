import React, { forwardRef } from 'react'
import { useOAuthLogout } from '../hooks/useOAuthLogout'

const LoggedinButtons = forwardRef(() => {
  const { handleLogout } = useOAuthLogout()
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="w-full h-8 my-2 px-4">
        <button
          onClick={() => handleLogout()}
          type="button"
          className="login-btn bg-red-300 rounded-xl py-2 text-white"
        >
          로그아웃
        </button>
      </div>
      <div className="w-full h-8 my-6 px-4">
        <button type="button" className="login-btn bg-orange-300 rounded-xl py-2 text-white">
          문의하기
        </button>
      </div>
    </div>
  )
})

export default LoggedinButtons
