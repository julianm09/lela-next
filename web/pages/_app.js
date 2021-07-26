import Cart from '../components/Cart';
import { Nav } from '../components/Nav'
import './app.css'

function MyApp({ Component, pageProps }) {
  return (

  <Cart>
  <Nav/>
  <Component {...pageProps} />
  </Cart>
  )
}

export default MyApp;
