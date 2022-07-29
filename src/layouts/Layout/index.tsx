import { BottomSheet, FooterDalda, Main } from '@jaewoong2/dui'
import React, { PropsWithChildren } from 'react'
import { useRecoilState } from 'recoil'
import { BottomSheetState } from '../../recoil/atoms/BottomsheetState'
import Header from '../../components/Header'
import * as Styled from './Layout.styles'

type LayoutProps = {
  BottomSheetChildren?: React.ReactNode
  BottomSheetDefaultHeight?: string
}

function Layout({
  children,
  BottomSheetChildren,
  BottomSheetDefaultHeight,
}: PropsWithChildren<LayoutProps>) {
  const [visible, setVisible] = useRecoilState(BottomSheetState)

  return (
    <Main>
      <Styled.Column>
        <Header onClickMenu={() => setVisible((prev: boolean) => !prev)} />
        <Styled.Section className="shadow-2xl">
          <div className="min-h-screen flex flex-col justify-between">
            {children}
            <FooterDalda />
          </div>
        </Styled.Section>
        <div
          className={`${
            visible ? 'block' : 'hidden'
          } w-screen h-screen absolute z-[1000] left-0 top-0`}
        >
          <BottomSheet
            defaultHeight={BottomSheetDefaultHeight ?? '400px'}
            visible={visible}
            setVisible={setVisible}
          >
            {BottomSheetChildren}
          </BottomSheet>
        </div>
      </Styled.Column>
    </Main>
  )
}

export default Layout
