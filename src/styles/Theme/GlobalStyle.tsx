import React, { useMemo } from 'react'
import { css, Global } from '@emotion/react'
import { useRecoilValue } from 'recoil'
import { getMobileDetect } from '../../utils/getMobileDetect'
import { BottomSheetState } from '../../recoil/atoms/bottomsheetState'

function GlobalStyle() {
  const isMobile = getMobileDetect().isMobile()
  const visible = useRecoilValue(BottomSheetState)

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

  const bottomSheetStyle = useMemo(
    () =>
      visible
        ? css`
            overflow-y: hidden;
          `
        : css`
            overflow-y: auto;
          `,
    [visible]
  )

  return (
    <Global
      styles={css`
        body,
        html,
        #root {
          background-color: #efeab8c8;
          ${mobileStyle}
          ${bottomSheetStyle}
        }
      `}
    />
  )
}

export default GlobalStyle
