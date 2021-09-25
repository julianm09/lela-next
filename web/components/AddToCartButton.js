// web/components/Products.js

import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import urlFor from "../lib/sanity/urlFor";
import styled from "styled-components";
import moment from "moment";
import { useState } from "react";

const GridUI = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  align-content: space-around;
  justify-content: space-between;

  grid-gap: 100px;
  margin: 0 0 100px;
`;

const ContainerUI = styled.div`
  width: 100%;
  height: 250px;
  display: flex;

  @media (max-width: 1000px) {
    height: auto;
    flex-direction: column;
  }
`;

const RowUI = styled.div`
  width: 100%;

  display: flex;

  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const ColumnUI = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameUI = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const PriceUI = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const ImageUI = styled.img`
  height: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 1000px) {
    width: 100%;
    height: auto;
  }
`;

const InfoUI = styled.div`
  display: flex;
  margin: 0 0 0 25px;
  width: 100%;

  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1000px) {
    margin: 0;
  }
`;

const ButtonUI = styled.div`
  width: 100%;
  height: 50px;
  background: white;
  border: 1px solid #ed2224;
  color: #ed2224;
  cursor: pointer;
  transition: 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const OverlayUI = styled.div`
  width: 100%;
  height: 50px;
  color: white;
  background: #ed2224;
  color: white;
  cursor: pointer;
  transition: 0.5s ease;
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;


`;

const AddToCartButton = ({ product }) => {
  const { addItem, removeItem, checkoutSingleItem } = useShoppingCart();

  var dateobj = new Date();

    // Contents of above date object is converted
  // into a string using toISOString() function.
  var B = dateobj.toISOString();

  const [added, setAdded] = useState(false)

  const handleAddToCart = (product) => {
    if (product.orderdate < B) {
      return;
    } else {
      setAdded(true);
      setTimeout(() => {
        setAdded(false);
      },1000)
      addItem(product);
    }

    console.log(product.pickupdate )
    console.log(dateobj)
  };





  return (
    <ButtonUI
      style={{ opacity: product.orderdate < B ? "50%" : "100%" }}
      onClick={() => handleAddToCart(product)}
    >
      {product.orderdate < B ? "Out of Stock" : "Add To Cart"}

      <OverlayUI style={{ display: added ? "flex" : "none" }}> Added to Cart!</OverlayUI>
    </ButtonUI>
  );
};

export default AddToCartButton;
