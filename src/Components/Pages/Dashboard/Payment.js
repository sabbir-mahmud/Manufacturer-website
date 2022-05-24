import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import useUser from '../../../Hooks/useFirebase.js/useUser';
import CheckOutForm from './CheckOutForm';

const Payment = () => {
    const { id } = useParams();
    const { user } = useUser();
    const { data: order } = useQuery(["order", id], () => fetch(`http://localhost:5000/api/order/${id}`).then(res => res.json()));
    const stripePromise = loadStripe('pk_test_51L0hxlEZlpATTp01pmVfH39AEz88vRS3gtaq24IKt7ycF15zlpMhZYIslPdUBDv76JJI2LOqh2gs9c5vARhhNRSu00W1WaO6Vd');
    return (
        <div className='px-14'>
            <div className="card w-50 max-w-md bg-base-100 shadow my-12">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, {user?.displayName} </p>
                    <h2 className="card-title">Please Pay for </h2>
                    <p>Your order for: <span className='text-orange-700'>{order?.productName}</span></p>
                    <p>Please pay: ${order?.pay}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckOutForm order={order} />
                    </Elements>
                </div>
            </div>

        </div>
    );
};

export default Payment;