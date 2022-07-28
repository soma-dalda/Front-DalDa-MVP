import styled from '@emotion/styled'
import { Main } from '@jaewoong2/dui'

export const Column = styled(Main.Column)`
  background-color: #fff;
  height: 100%;
  position: relative;
  max-height: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;

  footer {
    position: relative;
    margin-top: 20px;
  }
`

export const Section = styled(Main.Section)`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  footer {
    width: 100%;
  }
`

export const Button = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
`
