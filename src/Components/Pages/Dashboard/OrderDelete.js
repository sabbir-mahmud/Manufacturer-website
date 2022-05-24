import React from 'react';

const OrderDelete = ({ deleted, refetch, setDeleted }) => {
    const handleOrderCancel = (orderId) => {
        fetch(`http://localhost:5000/api/orders/${orderId}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(res => console.log(res));
        refetch();
        setDeleted({});
    }
    return (
        <div>
            <input type="checkbox" id="delete-order" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle bg-transparent">
                <div className="modal-box relative">
                    <label for="delete-order" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Are you sure!</h3>
                    <p className="py-4">you want to delete this order</p>
                    <button onClick={() => handleOrderCancel(deleted._id)} className="btn btn-primary">yes</button>
                </div>
            </div>

        </div>
    );
};

export default OrderDelete;