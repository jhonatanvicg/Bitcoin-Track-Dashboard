import App from 'next/app'
import AppContext from '../context/AppContext'
import useHiddeElements from '../hook/useHiddeElements'
import Navbar from '../components/Navbar'
import '../styles.css'


function MyApp({ Component, pageProps }) {

    const initialHidde = useHiddeElements(AppContext)

  return(
    <AppContext.Provider value={initialHidde}>
      <Navbar />
      <Component {...pageProps} />
    </AppContext.Provider>

  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp