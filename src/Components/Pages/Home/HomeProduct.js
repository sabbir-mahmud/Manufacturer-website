import React from 'react';
import { Link } from 'react-router-dom';

const HomeProduct = ({ product }) => {
    return (
        <div className="card w-96 bg-primary text-white shadow-xl">
            <figure><img src={product.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Name: {product.name}
                </h2>
                <p>Model: {product.model}</p>
                <p>Price: {product.price}</p>
                <p>Weight: {product.weight}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline py-3 px-5">{product.type}</div>
                </div>
                <Link to={`/products/${product._id}`}>Order</Link>
            </div>
        </div>
    );
};

export default HomeProduct;