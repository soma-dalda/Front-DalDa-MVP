import React, { Suspense } from 'react'
import { useRecoilValue } from 'recoil'
import Spinner from '../../../components/Spinner'
import { UserSelector } from '../recoil/selectors/UserSelector'
import LoggedinButtons from './LoggedinButtons'
import { LoginButtons } from './LoginButtons'

function AuthButtonsContainer() {
  const { isLoggedIn } = useRecoilValue(UserSelector)

  return (
    <Suspense
      fallback={
        <div className="col-center w-full h-full">
          <h4 className="my-4">잠시만 기달려주세요</h4>
          <Spinner />
        </div>
      }
    >
      {!isLoggedIn ? <LoginButtons /> : <LoggedinButtons />}
    </Suspense>
  )
}

export default AuthButtonsContainer
