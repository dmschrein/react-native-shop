// 1 setup payment sheet
// 2 Open stripe checkout form

import {
  initPaymentSheet,
  presentPaymentSheet,
} from "@stripe/stripe-react-native";
import { supabase } from "./supabase";
import { CollectionMode } from "@stripe/stripe-react-native/lib/typescript/src/types/PaymentSheet";

// Fetch the Stripe API key from environment variables
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

const fetchStripekeys = async (totalAmount: number) => {
  const { data, error } = await supabase.functions.invoke("stripe-checkout", {
    body: {
      totalAmount,
    },
    headers: {
      Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
    },
  });

  if (error) throw new Error(error.message);

  return data;
};

export const setupStripePaymentSheet = async (totalAmount: number) => {
  // Fetch paymentIntent and publishable key from server
  const { paymentIntent, publicKey } = await fetchStripekeys(totalAmount);

  if (!paymentIntent || !publicKey) {
    throw new Error("Failed to fetch Stripe keys");
  }

  await initPaymentSheet({
    merchantDisplayName: "DreamBody AI",
    paymentIntentClientSecret: paymentIntent,
    // customerId: customer,
    // customerEphemeralKeySecret: ephemeralKey,
    //returnURL: "https://zgyahmwkokrsevcdidzj.supabase.co",
    billingDetailsCollectionConfiguration: {
      name: "always" as CollectionMode,
      phone: "always" as CollectionMode,
    },
  });
};

export const openStripeCheckout = async () => {
  const { error } = await presentPaymentSheet();

  if (error) {
    throw new Error(error.message);
  }

  return true;
};
