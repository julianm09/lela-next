import Link from "next/link";
import Cart from "../../components/Cart";
import { CartSummary } from "../../components/CartSummary";
import Products from "../../components/Products";
import { client } from "../../lib/sanity/client";
import { productsQuery } from "../../lib/sanity/productsQuery";

import styled from 'styled-components'

import { Nav } from '../../components/Nav'
import Food from "../../components/Food";

const ContainerOne = styled.div`
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #484349;
  font-family: "Noto Sans JP", sans-serif;
`;

const RowUI = styled.div`
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: #484349;
  font-family: "Noto Sans JP", sans-serif;
  width: 50%;
  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ColumnUI = styled.div`
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #484349;
  width: 50%;

  @media (max-width: 1500px) {
    flex-direction: column;
    width: 80%;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    width: 90%;
  }
`;

const Order = ({ products, food }) => {
  return (
    <ContainerOne>
 

<ColumnUI>
<Products products={products}/>

</ColumnUI>


    
    </ContainerOne>
  );
};

export default Order;

export async function getStaticProps({ params }) {
  const products = await client.fetch(productsQuery);


  return {
    props: {
      products,

    },
  };
}