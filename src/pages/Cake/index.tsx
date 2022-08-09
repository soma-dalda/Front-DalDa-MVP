import React from 'react'
import { Spinner, withSuspense } from '@/components'

import * as Styled from './Cake.styles'
import CakeCards from './components/CakeCards'
import CakeInput from './components/CakeForm'
import Header from './components/Header'

function Cake() {
  return (
    <Styled.MainContainer>
      <Styled.MainWrapper>
        <Header />
        <CakeInput />
        <CakeCards />
      </Styled.MainWrapper>
    </Styled.MainContainer>
  )
}

export default withSuspense(Cake, <Spinner />)
