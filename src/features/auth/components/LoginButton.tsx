import React, { ButtonHTMLAttributes, forwardRef } from 'react'
import { useOAuthLogin } from '../hooks/useOAuthLogin'
import { LoginTo } from '../types'

type Props = {
  to: LoginTo
}

export const LoginButton = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & Props
>(({ children, to, onClick, className, ...props }, ref) => {
  const { handleLoginClick, isLoading } = useOAuthLogin({ to }, { enabled: false })

  return (
    <button
      className={`disabled:text-red-400 disabled:cursor-not-allowed ${className}`}
      type="button"
      onClick={handleLoginClick}
      disabled={isLoading}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
})
