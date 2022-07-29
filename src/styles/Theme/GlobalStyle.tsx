import React, { useMemo } from 'react'
import { css, Global } from '@emotion/react'
import { getMobileDetect } from '../../utils/getMobileDetect'

function GlobalStyle() {
  const isMobile = getMobileDetect().isMobile()

  const mobileStyle = useMemo(
    () =>
      !isMobile
        ? css`
            height: 100%;
          `
        : css`
            min-height: 100%;
          `,
    [isMobile]
  )

  return (
    <Global
      styles={css`
        body,
        html,
        #root {
          background-color: #efeab8c8;
          ${mobileStyle}
        }
      `}
    />
  )
}

export default GlobalStyle
