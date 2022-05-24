import React from 'react';
import { Link } from 'react-router-dom';

const HomeProduct = ({ product }) => {
    return (
        <div className="max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src={product.img} alt="" />
            <div className="text-white">
                <div className="card-body">
                    <h2 className="card-title">
                        Name: {product.name}
                    </h2>
                    <p>Model: {product.model}</p>
                    <p>Price: {product.price}</p>
                    <p>Weight: {product.weight}</p>
                    <p>Quantity: {product.quantity}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline py-3 px-5">{product.type}</div>
                    </div>
                    <Link to={`/products/${product._id}`} className="inline-flex items-center py-2 px-3 mt-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                        Order
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>

            </div>
        </div>

    );
};

export default HomeProduct;