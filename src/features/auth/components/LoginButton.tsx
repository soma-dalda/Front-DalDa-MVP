import React, { ButtonHTMLAttributes, forwardRef } from 'react'
import { useToast } from '@jaewoong2/toast'
import { useOAuthLogin } from '../hooks/useOAuthLogin'
import { LoginTo } from '../types'

type Props = {
  to: LoginTo
}

const LoginButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement> & Props>(
  ({ children, to, onClick, className, ...props }, ref) => {
    const { show } = useToast('로그인 실패!', {
      position: 'top',
      subPosition: 'right',
      type: 'error',
      color: 'white',
    })

    const { handleLoginClick, isLoading } = useOAuthLogin(
      { to },
      {
        enabled: false,
        useErrorBoundary: false,
        suspense: true,
        onError: () => {
          show().error()
        },
      }
    )

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
  }
)

export default LoginButton
