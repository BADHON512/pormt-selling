"use client";
import { newOrder } from "@/actions/orders/createOrders";
import { getUser } from "@/actions/user/getUser";
import { Styles } from "@/Utils/style";
import { Button } from "@nextui-org/react";
import {
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

type PromptData = {
  id: string;
  price: number;
};

const CheckoutForm = ({
  setOpen,
  open,
  promptData,
}: {
  setOpen: (open: boolean) => void;
  open: boolean;
  promptData: PromptData;
}) => {
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    try {
      const userData = await getUser();
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        redirect: "if_required",
      });

      if (error) {
        setMessage(error.message || "An error occurred during payment.");
        return;
      }

      if (paymentIntent) {
        setIsLoading(paymentIntent.status === "processing");

        if (paymentIntent.status === "succeeded") {
          await newOrder({
            userId: userData?.user?.id,
            promptId: promptData.id,
            payment_id: paymentIntent.id,
            payment_method: paymentIntent.payment_method
          });
          toast.success("Payment successful!");
          router.push("/my-orders")
          setOpen(!open);

        }
      }
    } catch (error) {
      console.error("Payment processing error:", error);
      setMessage("Payment failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const buttonStyles = `${Styles.button} !bg-[blue] mt-4 !p-2 !w-full`;

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <LinkAuthenticationElement id="link-authentication-element" />
      <PaymentElement id="payment-element" />
      {isLoading ? (
        <Button isLoading color="primary" className={buttonStyles}>
          Loading
        </Button>
      ) : (
        <Button id="submit" type="submit" className={buttonStyles}>
          <span>Pay Now ${promptData.price}</span>
        </Button>
      )}
      {message && (
        <div id="payment-message" className="text-[red] font-Poppins pt-2">
          {message}
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;
