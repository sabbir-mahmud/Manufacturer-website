import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import DeleteProductModal from './DeleteProductModal';

const ManageProduct = () => {
    const { data: products, refetch } = useQuery('manageProducts', () => fetch('https://young-garden-78103.herokuapp.com/api/products').then(res => res.json()));
    const [delProduct, setDelProduct] = useState({});

    const handleDelete = (id) => {
        const url = `https://young-garden-78103.herokuapp.com/api/products/${id}`;
        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        }).then(res => {
            if (res.status === 401 || res.status === 403) {
                return toast.error('You are not authorized to perform this action');
            } else {
                return res.json();

            }
        })
            .then(data => console.log(data))
        refetch()
        setDelProduct({});
        toast.info('Product deleted successfully');

    }
    return (
        <div>
            <table className="table w-full">
                {delProduct && <DeleteProductModal delProduct={delProduct} handleDelete={handleDelete} />}
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>model</th>
                        <th>type</th>
                        <th>price</th>
                        <th>Quantity</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products && products.map(product => {
                            return (
                                <tr key={product._id} className="hover">
                                    <td>{product.name}</td>
                                    <td>{product.model}</td>
                                    <td>{product.type}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td><Link className='text-orange-500 hover:cursor-pointer' to={`/dashboard/manage-Product/${product._id}`}>Update</Link></td>
                                    <td><label className='text-red-500 hover:underline hover:cursor-pointer' onClick={() => setDelProduct(product)} htmlFor="delete-product-admin">delete</label></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    );
};

export default ManageProduct;