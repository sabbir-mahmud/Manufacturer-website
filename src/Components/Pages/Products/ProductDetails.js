import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useUser from '../../../Hooks/useFirebase.js/useUser';

const ProductDetails = () => {
    const [btnDisable, setBtnDisable] = useState(false);
    const { user } = useUser();
    const { id } = useParams();
    const { data: product, refetch } = useQuery(['product', id], () => {
        return fetch(`http://localhost:5000/api/products/${id}`)
            .then(res => res.json());
    })

    const handleBtn = (e) => {
        let qtn = parseInt(e.target.value);
        let productQtn = parseInt(product.quantity);
        if (qtn > productQtn || qtn <= 100) {
            setBtnDisable(true);
        } else {
            setBtnDisable(false);
        }

    }

    const handleOrderSubmit = e => {
        e.preventDefault();
        const order = {
            user: user.email,
            productName: product.name,
            product: product._id,
            price: product.price,
            quantity: e.target.quantity.value,
            address: e.target.address.value,
            phone: e.target.phone.value,
        }
        fetch('http://localhost:5000/api/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(order),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    toast.success('Order placed successfully');
                    e.target.reset();
                    refetch();
                } else {
                    toast.error(result.message);
                }
            })
    }


    return (
        <div>
            <Helmet>
                <title>{product?.name}</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={product?.img} className="max-w-sm rounded-lg mr-14" alt='' />
                    <div>
                        <h1 className="text-4xl font-bold">Brand: {product?.brand}</h1>
                        <h1 className="text-2xl font-bold">Name: {product?.name}</h1>
                        <p className="py-1">Model: {product?.model}</p>
                        <p className="py-1">Quantity: {product?.quantity}</p>
                        <p className="py-1">Price: {product?.price}</p>
                    </div>
                </div>
            </div>

            <div className=" mb-14 w-4/5 mx-auto rounded-xl shadow-2xl bg-base-100">
                <div className="pt-12 mb-14">
                    <h3 className='text-center font-bold text-3xl '>Order this product</h3>
                </div>
                <form className='flex w-3/5 mx-auto' onSubmit={handleOrderSubmit}>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder={user?.email} className="input input-bordered" disabled />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder={user.displayName} className="input input-bordered" disabled />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Order Quantity</span>
                            </label>
                            <input onChange={handleBtn} type="number" name='quantity' placeholder='100' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="number" name='phone' placeholder='+8801782888241' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" name='address' placeholder='Dhaka, Bangladesh' className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={btnDisable} className="btn btn-primary">Order</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default ProductDetails;