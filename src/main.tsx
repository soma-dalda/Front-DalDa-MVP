import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'
import { BrowserRouter } from 'react-router-dom'
import { DUIThemeProvider } from '@jaewoong2/dui'

import './index.css'
import App from './App'
import GlobalStyle from './styles/Theme/GlobalStyle'
import { worker } from './mocks/browser'

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  worker.start()
}
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DUIThemeProvider>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <BrowserRouter>
            <GlobalStyle />
            <App />
          </BrowserRouter>
        </RecoilRoot>
      </QueryClientProvider>
    </DUIThemeProvider>
  </React.StrictMode>
)
