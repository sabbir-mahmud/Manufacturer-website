import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useUser from "../../../Hooks/useFirebase.js/useUser";

const CheckOutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState("");
    const [cardError, setCardError] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");
    const pay = order?.amount;
    const { handleLogout } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (pay) {
            fetch(`${process.env.REACT_APP_API_URL}api/order/payment`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
                body: JSON.stringify({ pay }),
            })
                .then((res) => {
                    if (res.status === 401 || res.status === 403) {
                        handleLogout();
                        return toast.error(
                            "You are not authorized to perform this action"
                        );
                    } else {
                        return res.json();
                    }
                })
                .then((data) => {
                    console.log(data);
                    if (data?.clientSecret) {
                        setClientSecret(data.clientSecret);
                    }
                });
        }
    }, [pay]);

    const handleSubmit = async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        setCardError(error?.message || "");
        setSuccess("");
        setProcessing(true);

        const { paymentIntent, error: intentError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: order?.name,
                        email: order?.email,
                    },
                },
            });

        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        } else {
            setCardError("");
            setTransactionId(paymentIntent.id);
            console.log(paymentIntent);
            setSuccess("Congrats! Your payment is completed.");

            //store payment on database
            const payment = {
                product: order.product,
                transactionId: paymentIntent.id,
            };
            fetch(`${process.env.REACT_APP_API_URL}api/order/${order._id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
                body: JSON.stringify(payment),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setProcessing(false);
                    console.log(data);
                    navigate("/dashboard");
                });
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <button
                    className="btn btn-success btn-sm mt-4"
                    disabled={!stripe || !clientSecret || success}
                    type="submit"
                >
                    Pay
                </button>

                {cardError && <p className="text-red-500 py-5">{cardError}</p>}

                {success && <p className="text-green-500 py-5">{success}</p>}
            </form>
        </>
    );
};

export default CheckOutForm;
