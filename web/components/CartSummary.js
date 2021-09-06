import { useState, useEffect } from "react";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import { fetchPostJSON } from "../utils/apiHelpers";
import styled from "styled-components";

import { MinusCircle, PlusCircle } from "react-feather";

const CheckoutUI = styled.form`

display: flex;
flex-direction: column;
width: 100%;
justify-content: flex-start;
align-items; flex-start;
margin: 0 0 100px 0;

`;

const OrderUI = styled.div`

display: flex;
flex-direction: column;
width: 100%;
justify-content: flex-start;
align-items; flex-start;

`;

const ItemContainerUI = styled.div`

display: flex;
flex-direction: row;
width: 100%;
justify-content: flex-start;
align-items; flex-start;
margin: 0 0 50px;
`;

const ImageContainerUI = styled.div`
width: 100px;
height: 100px;
overflow: hidden;
display: flex;

justify-content: center;
align-items; center;

`;

const ColumnUI = styled.div`

display: flex;
flex-direction: column;

justify-content: space-between;
align-items; center;

margin: 0 0 0 25px;

`;

const RowUI = styled.div`

display: flex;
flex-direction: row;

justify-content: flex-start;
align-items; flex-start;

`;

const NameUI = styled.div`

overflow: hidden;
display: flex;
justify-content: flex-start;
align-items; flex-start;

`;

const TextUI = styled.div`

overflow: hidden;
display: flex;
justify-content: flex-start;
align-items; flex-start;

`;

const QuantityUI = styled.div`

display: flex;
justify-content: center;
align-items; center;
text-align: center;
flex-direction: column;
font-size: 14px;
`;

const ButtonUI = styled.button`
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
  margin: 25px 0 0 0;

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const CartSummary = () => {
  //setting up some React states for our cart
  const [loading, setLoading] = useState(false);
  const [cartEmpty, setCartEmpty] = useState(true);
  // destructuring all the building blocks we get from use-shopping-cart
  const {
    formattedTotalPrice,
    cartCount,
    clearCart,
    cartDetails,
    redirectToCheckout,
    decrementItem,
    incrementItem,
    removeItem,
  } = useShoppingCart();

  const [arr, setArr] = useState();

  let productArr;

  useEffect(() => {
    setArr(
      Object.keys(cartDetails).map(function (key) {
        return cartDetails[key];
      })
    );
  }, [cartDetails]);

  console.log(arr);
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

  return (
    <>
      <CheckoutUI onSubmit={handleCheckout}>
        <h2>Your Order</h2>
        {/* This is where we'll render our cart;
			The item count changes quickly and may
			be mismatched between client and server.
			To avoid annoying error messages,
			we use 'supressHydrationWarning'.
			https://reactjs.org/docs/dom-elements.html#suppresshydrationwarning*/}

        <OrderUI>
          {arr && arr.length > 0
            ? arr.map((product) => {
                return (
                  <ItemContainerUI>
                    <ImageContainerUI>
                      <img style={{ height: "150%" }} src={product.image} />
                    </ImageContainerUI>

                    <ColumnUI>
                      <RowUI>
                        <NameUI>{product.name}</NameUI>
                      </RowUI>
                      <NameUI>
                        {" "}
                        <div>
                          {" "}
                          {formatCurrencyString({
                            value: product.price * product.quantity,
                            currency: "cad",
                          })}{" "}
                          CAD
                        </div>
                      </NameUI>

                      <QuantityUI>
                        <RowUI>
                          <MinusCircle
                            style={{ cursor: "pointer" }}
                            onClick={() => decrementItem(product.id, 1)}
                          />

                          <TextUI style={{ margin: " 0 10px" }}>
                            {product.quantity}
                          </TextUI>

                          <PlusCircle
                            style={{ cursor: "pointer" }}
                            onClick={() => incrementItem(product.id, 1)}
                          />

                          <div
                            onClick={() => removeItem(product.id)}
                            style={{ margin: "0 0 0 25px", cursor: "pointer" }}
                          >
                            remove from cart
                          </div>
                        </RowUI>
                      </QuantityUI>
                    </ColumnUI>
                  </ItemContainerUI>
                );
              })
            : "There is nothing in your cart."}
        </OrderUI>

        <p suppressHydrationWarning>
          <strong>Number of Items:</strong> {cartCount}
        </p>
        <p suppressHydrationWarning>
          <strong>Total:</strong> {formattedTotalPrice} CAD
        </p>

    {/*     <p>Use 4242 4242 4242 4242 as the card number.</p> */}

        <ButtonUI
          className="cart-style-background"
          type="button"
          onClick={clearCart}
        >
          Clear Cart
        </ButtonUI>

        <ButtonUI
          style={{
            color: "white",
            background:"#ed2224"

          }}
          className="cart-style-background"
          type="submit"
          disabled={cartEmpty || loading}
        >
          Checkout <div className="card-number"></div>
        </ButtonUI>
      </CheckoutUI>
    </>
  );
};
