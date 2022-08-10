import React, { Suspense } from 'react'

import { Spinner } from '@/components'

import { useRecoilValue } from 'recoil'
import { LoggedinButtons } from './index'
import LoginButtons from './LoginButtons'
import { UserState } from '../recoil/atoms/UserState'

function AuthButtonsContainer() {
  const { token } = useRecoilValue(UserState)

  return (
    <Suspense
      fallback={
        <div className="col-center w-full h-full">
          <h4 className="my-4">잠시만 기달려주세요</h4>
          <Spinner />
        </div>
      }
    >
      {!token ? <LoginButtons /> : <LoggedinButtons />}
    </Suspense>
  )
}

export default AuthButtonsContainer
