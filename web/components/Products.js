// web/components/Products.js

import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import urlFor from "../lib/sanity/urlFor";
import styled from 'styled-components'

const GridUI = styled.div`
width: 100%;
display: grid;
`;


const Products = ({ products }) => {


  console.log(products)
  const { addItem, removeItem, checkoutSingleItem  } = useShoppingCart();
  return (
    <GridUI>
      {products.filter(product => product.method == 'deliver').map((product) => (
        <div key={product.id}>
          <img src={urlFor(product.image).width(200)} alt={product.name} />
          <h2>{product.name}</h2>
          {product.method == 'pickup' ? 'this is for pickup only' : ''}
          <p>
            CA{formatCurrencyString({
              value: product.price,
              currency: "cad",
            })}
          </p>
          <button onClick={() => addItem(product)}>Add to cart</button>
          <button onClick={() => console.log(product)}>Buy now</button>
          <button onClick={() => removeItem(product.id)}>Remove</button>
        </div>
      ))}
    </GridUI>
  );
};

export default Products;