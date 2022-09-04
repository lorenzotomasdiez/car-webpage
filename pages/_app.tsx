import type { AppProps } from 'next/app'
import Head from 'next/head'
import { SettingsProvider } from '../context'
import ThemeProvider from '../theme'
import {MotionContainer} from '../components';


function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <SettingsProvider>
      <MotionContainer>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </MotionContainer>
    </SettingsProvider>
  </>
  )
}

export default MyApp
