import Cart from '../components/Cart';
import { Footer } from '../components/Footer';
import { Nav } from '../components/Nav'
import './app.css'

function MyApp({ Component, pageProps }) {
  return (

  <Cart>
  <Nav/>
  <Component {...pageProps} />
  <Footer/>
  </Cart>
  )
}

export default MyApp;
