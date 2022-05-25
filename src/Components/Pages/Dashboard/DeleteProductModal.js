import React from 'react';

const DeleteProductModal = ({ handleDelete, delProduct }) => {
    return (
        <div>
            <input type="checkbox" id="delete-product-admin" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle bg-transparent">
                <div className="modal-box relative">
                    <label for="delete-product-admin" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Are you sure!</h3>
                    <p className="py-4">you want to delete this product</p>
                    <button onClick={() => handleDelete(delProduct._id)} className="btn btn-primary">yes</button>
                </div>
            </div>

        </div>
    );
};

export default DeleteProductModal;