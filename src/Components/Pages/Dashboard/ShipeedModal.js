import React from 'react';

const ShippedModal = ({ shipped, refetch, setShipped }) => {
    const handleShipped = (id) => {
        const status = { status: "shipped" };
        fetch(`https://young-garden-78103.herokuapp.com/api/orders/shipped/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        setShipped({});
        refetch();
    }
    return (
        <div>
            <div>
                <input type="checkbox" id="shipped-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle bg-transparent">
                    <div className="modal-box relative">
                        <label for="shipped-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">Are you sure!</h3>
                        <p className="py-4">you want to shipped this order</p>
                        <button onClick={() => handleShipped(shipped._id)} className="btn btn-primary">yes</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ShippedModal;