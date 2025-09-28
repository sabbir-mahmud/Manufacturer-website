import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Helmet from "react-helmet";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useUser from "../../../Hooks/useFirebase.js/useUser";
import CheckOutForm from "./CheckOutForm";

const Payment = () => {
    const { id } = useParams();
    const { user, handleLogout } = useUser();
    const { data: order } = useQuery(["order", id], () =>
        fetch(`${process.env.REACT_APP_API_URL}api/order/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => {
            if (res.status === 401 || res.status === 403) {
                handleLogout();
                return toast.error(
                    "You are not authorized to perform this action"
                );
            } else {
                return res.json();
            }
        })
    );
    const stripePromise = loadStripe(
        "pk_test_51L0hxlEZlpATTp01pmVfH39AEz88vRS3gtaq24IKt7ycF15zlpMhZYIslPdUBDv76JJI2LOqh2gs9c5vARhhNRSu00W1WaO6Vd"
    );
    return (
        <div className="px-14">
            <Helmet>
                <title>Payment</title>
            </Helmet>
            <div className="card w-50 max-w-md bg-base-100 shadow my-12">
                <div className="card-body">
                    <p className="text-success font-bold">
                        Hello, {user?.displayName}{" "}
                    </p>
                    <h2 className="card-title">Please Pay for </h2>
                    <p>
                        Your order for:{" "}
                        <span className="text-orange-700">
                            {order?.productName}
                        </span>
                    </p>
                    <p>Please pay: ${order?.amount}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckOutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;
