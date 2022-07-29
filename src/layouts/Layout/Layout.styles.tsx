import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Main } from '@jaewoong2/dui'
import { getMobileDetect } from '../../utils/getMobileDetect'

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

  div[role='dialog'] {
    z-index: 999;
    position: absolute;
  }

  ${({ theme }) =>
    theme.isMobile &&
    css`
      margin-top: 42px;
    `}
`

export const Section = styled(Main.Section)`
  width: 100%;
  min-height: 100vh;
  z-index: 1;
  -webkit-overflow-scrolling: touch;

  footer {
    width: 100%;
  }

  ${getMobileDetect().isMobile() &&
  css`
    overflow-y: hidden;
  `}
`

export const Button = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
`
