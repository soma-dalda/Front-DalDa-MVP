import { BottomSheet, FooterDalda, Main } from '@jaewoong2/dui';
import React, { PropsWithChildren, useState } from 'react';
import Header from '../../components/Header';
import * as Styled from './Layout.styles';

type LayoutProps = {
  BottomSheetChildren?: React.ReactNode;
  BottomSheetDefaultHeight?: string;
};

function Layout({
  children,
  BottomSheetChildren,
  BottomSheetDefaultHeight,
}: PropsWithChildren<LayoutProps>) {
  const [visible, setVisible] = useState(false);

  return (
    <Main>
      <Styled.Column>
        <Styled.Section className="shadow-2xl">
          <Header onClickMenu={() => setVisible((prev) => !prev)} />
          <div className="min-h-full flex flex-col justify-between">
            {children}
            <FooterDalda />
          </div>
        </Styled.Section>
        <BottomSheet
          defaultHeight={BottomSheetDefaultHeight ?? '400px'}
          visible={visible}
          setVisible={setVisible}
        >
          {BottomSheetChildren}
        </BottomSheet>
      </Styled.Column>
    </Main>
  );
}

export default Layout;
