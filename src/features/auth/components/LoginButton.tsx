import React, { ButtonHTMLAttributes, forwardRef } from 'react'
import { LoginTo } from '../types'

type Props = {
  to: LoginTo
}

const LoginButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement> & Props>(
  ({ children, to, ...props }, ref) => {
    return (
      <button type="button" {...props} ref={ref}>
        {children}
      </button>
    )
  }
)

export default LoginButton
