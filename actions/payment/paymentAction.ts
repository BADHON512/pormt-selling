"use server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// send stripe publishable key
export const stripePublishableKey = async () => {
  const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
  return publishableKey;
};

// send stripe payment intent
export const stripePaymentIntent = async ({ amount }: { amount: Number }) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      metadata: {
        company: "CodeHorizon",
      },
      automatic_payment_methods: {
        enabled: true,
      },
    });
   
    return JSON.parse(JSON.stringify(paymentIntent));
  } catch (error) {
    console.log(error);
  }
};
