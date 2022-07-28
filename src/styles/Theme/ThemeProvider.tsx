import React, { useMemo } from 'react'
import { ThemeProvider } from '@emotion/react'
import { breakpoint, color, borderRadius } from '../constants'
import { getMobileDetect } from '../../utils/getMobileDetect'

type Props = {
  children: React.ReactNode
}

export function DUIThemeProvider({ children }: Props) {
  const { isMobile } = getMobileDetect()

  const Theme = useMemo(
    () => ({
      color,
      breakpoint,
      borderRadius,
      isMobile: isMobile(),
    }),
    [isMobile]
  )

  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>
}
