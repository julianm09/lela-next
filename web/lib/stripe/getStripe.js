// web/lib/stripe/getStripe.js

import { loadStripe } from "@stripe/stripe-js";

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe('pk_live_51JFU6sHU3r8RBID1vSR7F4f2PxHXMCPyeqTgb7gEnOoEKoQSZwlYxjcsn4yGMfwSwzszVyJIIWkBr5twqcEyI7nw00qkETIETp');
  }
  return stripePromise;
};

export default getStripe;