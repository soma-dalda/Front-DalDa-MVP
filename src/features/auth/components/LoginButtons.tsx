import React from 'react'
import { LoginButton } from './LoginButton'

export function LoginButtons() {
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="w-full h-8 my-2">
        <LoginButton
          to="kakao"
          className="border-none bg-white w-full justify-center text-md text-yellow-500"
          type="button"
        >
          카카오 계정으로 로그인
        </LoginButton>
      </div>
      <div className="w-full h-8 my-2">
        <LoginButton
          to="naver"
          className="border-none bg-white w-full justify-center text-md text-green-600"
          type="button"
        >
          네이버 계정으로 로그인
        </LoginButton>
      </div>
      <div className="w-full h-8 my-2">
        <LoginButton
          to="google"
          className="border-none bg-white w-full justify-center text-md text-gray-600"
          type="button"
        >
          구글 계정으로 로그인
        </LoginButton>
      </div>
    </div>
  )
}
