import Link from "next/link";
import Cart from "../../components/Cart";
import { CartSummary } from "../../components/CartSummary";
import Products from "../../components/Products";
import { client } from "../../lib/sanity/client";
import { Nav } from '../../components/Nav'
import { productsQuery } from "../../lib/sanity/productsQuery";

const Merch = ({ products }) => {
  return (
    <main>
  
    <h1>Cart</h1>
 
        <CartSummary />
  
      <Link href="/">
        <a>Back Home</a>
      </Link>

    
    </main>
  );
};

export default Merch;

export async function getStaticProps({ params }) {
  const products = await client.fetch(productsQuery);

  return {
    props: {
      products,
    },
  };
}