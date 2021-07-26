// web/components/Products.js

import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import urlFor from "../lib/sanity/urlFor";
import styled from "styled-components";
import moment from "moment";

const GridUI = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: space-between;

  align-content: space-around;
  justify-content: space-between;
  justify-content: space-between;
  grid-gap: 50px;
`;

const ContainerUI = styled.div`
  width: 100%;
  height: 500px;
`;

const ImageUI = styled.div`
  width: 100%;
  height: 150px;

  overflow: hidden;
`;

const ButtonUI = styled.button`
  width: 100%;
  height: 50px;
  background: white;
  border: 1px solid red;
  color: red;
  cursor: pointer;
`;

const Food = ({ food }) => {
  const { addItem, removeItem, checkoutSingleItem } = useShoppingCart();

  const handleAddToCart = () => {
    
  }
  return (
    <GridUI>
      {food
        .filter((product) => product.method == "pickup")
        .map((product) => (
          <ContainerUI key={product.id}>
            <ImageUI>
              <img
                style={{ width: "100%" }}
                src={urlFor(product.image)}
                alt={product.name}
              />
            </ImageUI>

            <h2>{product.name}</h2>
            <div>
              {product.method == "pickup"
                ? "* this item is for pickup only"
                : ""}
            </div>
            {"pick up on " + moment(product.pickupdate).format("MM/DD/YYYY")}
            <p>
              CA
              {formatCurrencyString({
                value: product.price,
                currency: "cad",
              })}
            </p>
            <ButtonUI onClick={() => addItem(product)}>Add to cart</ButtonUI>
          </ContainerUI>
        ))}
    </GridUI>
  );
};

export default Food;
