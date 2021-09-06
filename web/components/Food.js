// web/components/Products.js

import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import urlFor from "../lib/sanity/urlFor";
import styled from "styled-components";
import moment from "moment";
import AddToCartButton from "./AddToCartButton";

const GridUI = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  align-content: space-around;
  justify-content: space-between;
  transition: 0.5s ease;

  grid-gap: 100px;
  margin: 0 0 100px;
  font-family: "Noto Sans JP", sans-serif;
`;

const ContainerUI = styled.div`
  width: 100%;

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
  align-items: flex-start;
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const ColumnUI = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const NameUI = styled.div`
  font-size: 24px;
  font-weight: 900;
  margin: 0 0 10px 0;
  @media (max-width: 1000px) {
    margin: 20px 0 10px 0;
  }
`;

const PriceUI = styled.div`
  font-size: 18px;
  font-weight: 700;
  @media (max-width: 1000px) {
    margin: 0px 0 10px 0;
  }
`;

const DescriptionUI = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin 0 0 20px 0;
`;

const PickupUI = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin 0 0 20px 0;
`;

const ImageContainerUI = styled.div`
  width: 100%;
  height: auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  @media (max-width: 1000px) {
    width: 100%;
    height: auto;
  }
`;

const ImageUI = styled.img`
  width: 150%;

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

const ButtonUI = styled.button`
  width: 100%;
  height: 50px;
  background: white;
  border: 1px solid #ed2224;
  color: #ed2224;
  cursor: pointer;
`;

const Food = ({ food, scrollposition }) => {
  const { addItem, removeItem, checkoutSingleItem } = useShoppingCart();

  const handleAddToCart = (product) => {
    if (product.pickupdate < Date()) {
      return;
    } else {
      addItem(product);
    }

    console.log(product.pickupdate < Date());
  };

  return (
    <GridUI style={{top: -scrollposition / 30}}>
      {food
        .filter((product) => product.method == "pickup")
        .map((product) => (
          <ContainerUI key={product.id}>
            <ImageContainerUI>
              <ImageUI src={urlFor(product.image)} alt={product.name} />
            </ImageContainerUI>

            <InfoUI>
              <RowUI>
                <ColumnUI>

                <RowUI style={{width: '100%',  justifyContent: 'space-between'}}>
                <NameUI>{product.name}</NameUI>

<PriceUI>
  {formatCurrencyString({
    value: product.price,
    currency: "cad",
  })} CAD
</PriceUI>


                </RowUI>

                  <PickupUI>
                    {"pick up on " +
                      moment(product.pickupdate).format("MM/DD/YYYY")}
                  </PickupUI>
                </ColumnUI>
              </RowUI>

              <RowUI>
                <DescriptionUI>{product.description}</DescriptionUI>
              </RowUI>

              <RowUI>
                <DescriptionUI>
                  Ingredients: {product.ingredients} (no substitutions).
                </DescriptionUI>
              </RowUI>

              <ColumnUI>
                <PickupUI style={{ color: "#ed2224", display: 'flex', justifyContent: 'flex-end' }}>
                  order before {moment(product.pickupdate).format("MM/DD/YYYY")}
                </PickupUI>

                <AddToCartButton product={product} />
              </ColumnUI>
            </InfoUI>
          </ContainerUI>
        ))}
    </GridUI>
  );
};

export default Food;
