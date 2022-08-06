import React from 'react'
import * as Styled from './Cake.styles'
import CakeCard from './components/CakeCard'
import CakeInput from './components/CakeForm'
import Header from './components/Header'

function Cake() {
  return (
    <Styled.MainContainer>
      <Styled.MainWrapper>
        <Header />
        <CakeInput />
        {Array(10)
          .fill(0)
          .map((_, i) => {
            return {
              key: Math.floor(Math.random() * 250 + 250 + i),
              user: { nickName: '닉네임', profileImg: 'https://i.pravatar.cc/210' },
              like: Math.floor(Math.random() * 999),
              description: '케이크 맛있어~',
              images: [`https://picsum.photos/450/${Math.floor(Math.random() * 250 + 250 + i)}`],
            }
          })
          .map((data) => (
            <CakeCard {...data} />
          ))}
      </Styled.MainWrapper>
    </Styled.MainContainer>
  )
}

export default Cake
