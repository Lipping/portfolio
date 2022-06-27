import { globalStyles } from '../shared/styles'
import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'



function App({ Component, pageProps }) {

  useEffect(() => {
    hotjar.initialize(3040690, 6)
  }, [])

  return (
    <>
      {globalStyles}
      <Component {...pageProps} />
    </>
  )
}

export default App
