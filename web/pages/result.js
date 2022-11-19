import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";
import { fetchGetJSON } from "../utils/apiHelpers";
import { useShoppingCart } from "use-shopping-cart";
import { useEffect, useState } from "react";
import moment from "moment";
import styled from "styled-components";

const ContainerOne = styled.div`
  position: relative;
  display: flex;
  margin: 200px 0 200px 0;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  color: #484349;
  font-family: "Noto Sans JP", sans-serif;
`;

const RowUI = styled.div`
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

const HeaderUI = styled.h3`
  font-size: 56px;
  font-weight: 900;
  width: 100%;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: #ed2224;
  color: white;
  margin: 0;
`;

const TextUI = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 40px;
  width: 100%;
  margin: 0;
  margin: 50px 0 0px 0;
`;

const AlertUI = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 40px;
  width: 100%;
  margin: 0;
  margin: 50px 0;
  color: #ed2224;
`;

const ResultPage = () => {
  const router = useRouter();
  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  const { data, error } = useSWR(
    router.query.session_id
      ? `/api/checkout_sessions/${router.query.session_id}`
      : null,
    fetchGetJSON
  );

  if (error) {
    return <div>failed to load</div>;
  }

  const [cartEmpty, setCartEmpty] = useState(false);
  const {
    formattedTotalPrice,
    cartCount,
    clearCart,
    cartDetails,
    decrementItem,
    redirectToCheckout,
  } = useShoppingCart();

  const [forPickup, setForPickup] = useState(false);

  const [pickupDate, setPickupDate] = useState("");

  useEffect(() => {
    const objKeys = Object.keys(cartDetails);

    for (var i = 0; i < objKeys.length; i++) {
      if (cartDetails[objKeys[i]].method.includes("pickup")) {
        setForPickup(true);
        setPickupDate(cartDetails[objKeys[i]].pickupdate);
      }
    }

    clearCart();
  }, []);

  return (
    <ContainerOne>
      <h3>
        Thank you, {data?.payment_intent.charges.data[0].billing_details.name}.
      </h3>
      <p>
        Confirmation email sent to{" "}
        {data?.payment_intent.charges.data[0].billing_details.email}.
      </p>

      <p>
        {forPickup ? "Pickup on " : ""}
        {moment(pickupDate).format("MM/DD/YYYY")}
      </p>

      <hr />
      {/*       <h2>Status: {data?.payment_intent?.status ?? "loading..."}</h2>
      <h3>CheckoutSession response:</h3>
      <PrintObject content={data ?? "loading..."} /> */}
      <Link href="/">
        <a>Back home</a>
      </Link>
    </ContainerOne>
  );
};

export default ResultPage;
