import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { UIProvider } from '../context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <Component {...pageProps} />
    </UIProvider>
  )
}

export default MyApp
