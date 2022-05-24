import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import useUser from '../../../Hooks/useFirebase.js/useUser';

const Orders = () => {
    const { user } = useUser();
    const { data: order } = useQuery(["order", user.email], () => {
        return fetch(`http://localhost:5000/api/order/?email=${user.email}`)
            .then(res => res.json());
    })

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

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
                                <tr key={order._id} className="hover">
                                    <td>{order?.productName}</td>
                                    <td>{order?.price}</td>
                                    <td>{order?._id}</td>
                                    <td>
                                        {
                                            order?.paid ? <p className='text-green-500'>Paid</p> :
                                                <>
                                                    <button>Cancel</button>
                                                    <Link className='mx-2' to={`/dashboard/payment/${order._id}`}>pay</Link>
                                                </>
                                        }
                                    </td>
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