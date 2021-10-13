import Cart from '../components/Cart';
import { Footer } from '../components/Footer';
import { Nav } from '../components/Nav'
import useWindowSize from '../components/useWindowSize';
import './app.css';
import { useState, useEffect } from 'react';
import Head from 'next/head'



function MyApp({ Component, pageProps }) {

  const [scrollPosition, setScrollPosition] = useState(0);

  
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const size = useWindowSize();

  return (

  <Cart>
  <Nav width={size.width}/>
  <Component {...pageProps} scrollPosition={scrollPosition}/>
  <Footer {...pageProps} />
  </Cart>
  )
}

export default MyApp;
