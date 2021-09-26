// pages/api/checkout_sessions/[id].js

import Stripe from "stripe";
const stripe = new Stripe("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", {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: "2020-03-02",
});

export default async function handler(req, res) {
  const id = req.query.id;
  try {
    if (!id.startsWith("cs_")) {
      throw Error("Incorrect CheckoutSession ID.");
    }
    const checkout_session = await stripe.checkout.sessions.retrieve(id, {
      expand: ["payment_intent"],
    });

    res.status(200).json(checkout_session);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}