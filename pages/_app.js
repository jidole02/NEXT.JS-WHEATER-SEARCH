import Main from '../src/compnents/main'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
