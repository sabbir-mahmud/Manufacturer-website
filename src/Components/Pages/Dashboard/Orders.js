import React from 'react';
import { useQuery } from 'react-query';
import useUser from '../../../Hooks/useFirebase.js/useUser';

const Orders = () => {
    const { user } = useUser();
    const { data: order } = useQuery(["order", user.email], () => {
        return fetch(`http://localhost:5000/api/order/?email=${user.email}`)
            .then(res => res.json());
    })
    console.log(order);
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Order ID</th>
                        <th>Action Color</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        order?.map(order => {
                            return (
                                <tr>
                                    <td>{order?.productName}</td>
                                    <td>{order?.price}</td>
                                    <td>{order?._id}</td>
                                    <td>pay</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Orders;