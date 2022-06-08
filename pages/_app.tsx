import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return(
  <>
  <Script strategy='lazyOnload' src={"https://www.googletagmanager.com/gtag/js?id=G-WC139SS7CS"}/>
  <Script strategy='lazyOnload'>
    {"window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-WC139SS7CS');"}
  </Script>
  <Script id='bootstrap-cdn' src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'/>  
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
