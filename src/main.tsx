import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { RecoilRoot } from 'recoil'
import { BrowserRouter } from 'react-router-dom'
import { DUIThemeProvider } from '@jaewoong2/dui'

import './index.css'
import { ToastProvider } from '@jaewoong2/toast'
import App from './App'
import GlobalStyle from './styles/Theme/GlobalStyle'
import { worker } from './mocks/browser'

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  worker.start({ onUnhandledRequest: 'bypass' })
}
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DUIThemeProvider>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <BrowserRouter>
            <GlobalStyle />
            <ToastProvider>
              <App />
            </ToastProvider>
          </BrowserRouter>
        </RecoilRoot>
        <ReactQueryDevtools position="top-left" />
      </QueryClientProvider>
    </DUIThemeProvider>
  </React.StrictMode>
)
