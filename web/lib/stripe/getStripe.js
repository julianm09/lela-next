// web/lib/stripe/getStripe.js

import { loadStripe } from "@stripe/stripe-js";

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe('pk_test_51JFU6sHU3r8RBID1jeFCVorTwBqfnzKodOBxSKtpzVVzXrnI4ZfXDrtHdKUkonf8vB5TSOMZ5q3skO46eQwWuEG000ytyAasAg');
  }
  return stripePromise;
};

export default getStripe;