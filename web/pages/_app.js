import Cart from '../components/Cart';
import { Footer } from '../components/Footer';
import { Nav } from '../components/Nav'
import useWindowSize from '../components/useWindowSize';
import './app.css'

function MyApp({ Component, pageProps }) {

  const size = useWindowSize();



  return (

  <Cart>
  <Nav width={size.width}/>
  <Component {...pageProps} />
  <Footer/>
  </Cart>
  )
}

export default MyApp;
