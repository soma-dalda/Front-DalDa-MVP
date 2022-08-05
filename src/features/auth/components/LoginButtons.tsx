import React from 'react'
import { LoginTo } from '../types'
import { LoginButton } from './index'

const LOGIN_CONSTANT: {
  title: string
  to: LoginTo
  className: string
}[] = [
  {
    title: '카카오 계정으로 로그인',
    to: 'kakao',
    className: 'login-btn kakao',
  },
  {
    title: '네이버 계정으로 로그인',
    to: 'naver',
    className: 'login-btn naver',
  },
  {
    title: '구글 계정으로 로그인',
    to: 'google',
    className: 'login-btn google',
  },
]

function LoginButtons() {
  return (
    <div className="h-full flex flex-col justify-center">
      {LOGIN_CONSTANT.map(({ title, to, className }) => (
        <div key={to} className="w-full h-8 my-2">
          <LoginButton to={to} className={className}>
            {title}
          </LoginButton>
        </div>
      ))}
    </div>
  )
}

export default LoginButtons
