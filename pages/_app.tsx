import { globalStyles } from '../shared/styles'
import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'
import { Router, useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import Head from 'next/head'


function App({ Component, pageProps }) {

  useEffect(() => {
    hotjar.initialize(3040690, 6)
  }, [])

  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [Router.events])

  return (
    <>
      <Head>
       <title>Portfolio | Felipe Lages</title>
      </Head>
      {globalStyles}
      <Component {...pageProps} />
    </>
  )
}

export default App
