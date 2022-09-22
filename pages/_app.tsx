import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { AuthProvider, UIProvider } from '../context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <UIProvider>
        <Component {...pageProps} />
      </UIProvider>
    </AuthProvider>
  )
}

export default MyApp
