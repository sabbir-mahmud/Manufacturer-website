import React from 'react';
import { toast } from 'react-toastify';

const UserOrderDelete = ({ cancel, refetch, setCancel }) => {
    const handleOrderCancel = (orderId) => {
        fetch(`http://localhost:5000/api/user/orders/${orderId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(res => toast.info('Order Cancelled'));
        refetch();
        setCancel({});
    }
    return (
        <div>
            <input type="checkbox" id="user-delete-order" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle bg-transparent">
                <div className="modal-box relative">
                    <label for="user-delete-order" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Are you sure!</h3>
                    <p className="py-4">you want to delete this order</p>
                    <button onClick={() => handleOrderCancel(cancel._id)} className="btn btn-primary">yes</button>
                </div>
            </div>

        </div>
    );
};

export default UserOrderDelete;