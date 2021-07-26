import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";
import { fetchPostJSON } from "../utils/apiHelpers";

const HeaderUI = styled.div`
  display: flex;
  height: 15vh;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 2px solid #ed2224;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  background: white;
  transition: 0.2s ease;
  font-size: 16px;
  color: #484349;
  font-weight: 500;
`;

const BannerUI = styled.a`
  display: flex;
  height: 50px;
  width: 100vw;

  position: fixed;
  top: 15vh;
  left: 0;
  border-bottom: 2px solid #ED2224;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  background: #ED2224;
  transition: 0.2s ease;
  font-size: 16px;
  color: white;
  font-weight: 400;
  cursor: pointer;

  @media (max-width: 400px){
    font-size: 12px;
  }

`;


const ContainerUI = styled.div`
display: flex;


width: 50%;

justify-content: space-between;
align-items:  space-between;

@media (max-width: 1500px){
  width: 80%;
}

`;



const NavUI = styled.div`
  display: flex;
  height: 150px;

  min-height: 100px;

  justify-content: flex-end;
  align-items: center;

  @media (max-width: 1500px) {
    width: 75%;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;
const CartCountUI = styled.div`
  background: #ED2224;
  color: white;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  right: -15px;
  top: -15px;
  font-size: 14px;
  transition: 1s ease;
  
`;

const LogoUI = styled.img`
  cursor: pointer;
`;

const LinkUI = styled.a`
  text-decoration: none;
  cursor: pointer;
  margin: 0 0 0 50px;
  display: flex;
  position: relative;
  color: #484349;

  &:hover {
    color: #ed2224;
  }
`;

export const Nav = ({ width }) => {
  //setting up some React states for our cart
  const [loading, setLoading] = useState(false);
  const [cartEmpty, setCartEmpty] = useState(true);
  // destructuring all the building blocks we get from use-shopping-cart
  const { cartCount, clearCart, cartDetails, redirectToCheckout } =
    useShoppingCart();

  //sets our cartEmpty state with cart data
  useEffect(() => setCartEmpty(!cartCount), [cartCount]);

  const handleCheckout = async (event) => {
    event.preventDefault();
    setLoading(true);
    //send the cart data to our serverless API
    const response = await fetchPostJSON(
      "/api/checkout_sessions/cart",
      cartDetails
    );

    if (response.statusCode === 500) {
      console.error(response.message);
      return;
    }
    //if nothing went wrong, sends user to Stripe checkout
    redirectToCheckout({ sessionId: response.id });
  };
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [active]);

  useEffect(() => {
    if (width >= 1000) {
      setActive(false);
    }
  }, [width]);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);

  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setCurrentScrollPosition(currentScrollPos);

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <div>
      <HeaderUI
        style={{
          transform: visible ? "translateY(0px)" : "translateY(-15vh)",
        }}
      >


        <ContainerUI>

        <Link href="/">
          <LogoUI style={{ width: '10vh', maxWidth: '75px'}} src="/logo.svg" />
        </Link>
        <NavUI>

        

        <LinkUI
            target="_blank"
            href="https://lelavietnamese.gpr.globalpaymentsinc.ca/menu"
          >
            menu
          </LinkUI>

          <LinkUI
            target="_blank"
            href="https://www.skipthedishes.com/le-la-vietnamese-restaurant-centre-st"
          >
            takeout
          </LinkUI>

          <Link href="/order">
            <LinkUI>made to order</LinkUI>
          </Link>

          <Link href="/merch">
            <LinkUI>merch</LinkUI>
          </Link>

          <Link href="/cart">
            <LinkUI>
              cart
              {cartCount < 1 ? "" : <CartCountUI>{cartCount}</CartCountUI>}
            </LinkUI>
          </Link>
        </NavUI>

        </ContainerUI>
      </HeaderUI>

      <BannerUI  
                  target="_blank"
                  href="https://lelavietnamese.gpr.globalpaymentsinc.ca/menu"
      style={{
          transform: visible ? "translateY(0px)" : "translateY(-15vh)",
        }}>
          
          Get 10% off when ordering from our online menu
        </BannerUI>
    </div>
  );
};
