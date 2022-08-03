import React, { useMemo } from 'react'
import { css, Global } from '@emotion/react'
import { useRecoilValue } from 'recoil'
import { getMobileDetect } from '../../utils/getMobileDetect'
import { BottomSheetState } from '../../recoil/atoms/BottomsheetState'

function GlobalStyle() {
  const isMobile = getMobileDetect().isMobile()
  const visible = useRecoilValue(BottomSheetState)

  const mobileStyle = useMemo(
    () =>
      !isMobile
        ? css`
            height: 100%;
            background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
          `
        : css`
            min-height: 100%;
            background: none;
          `,
    [isMobile]
  )

  const bottomSheetStyle = useMemo(
    () =>
      visible
        ? css`
            overflow-y: hidden;
            touch-action: none;
          `
        : css`
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            touch-action: auto;
          `,
    [visible]
  )

  return (
    <Global
      styles={css`
        body,
        html,
        #root {
          ${mobileStyle};
          ${bottomSheetStyle};
        }
      `}
    />
  )
}

export default GlobalStyle
