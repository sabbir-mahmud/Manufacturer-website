import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const {
        register,
        handleSubmit, reset
    } = useForm();
    const imageStorageKey = 'd6cf365aabe2ff86e40fafe5d6f330c1'

    const onSubmit = async data => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        brand: 'Mikrotik',
                        name: data.productName,
                        model: data.model,
                        price: data.price,
                        weight: data.weight,
                        quantity: data.Quantity,
                        type: data.type,
                        img: img,
                    }
                    fetch('http://localhost:5000/api/products', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(product),
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.insertedId) {
                                toast.info('Product Added Successfully');
                                reset();
                            }
                        })
                }
            })

    }

    return (
        <div className='mb-24 mt-14'>
            <div className="title">
                <h3 className='text-2xl my-9 font-bold text-center'>Add Products</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-3/4 mx-auto card  shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <input type="text"  {...register('productName')} placeholder="Product Name: Mikrotik 1200PCB" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text"  {...register('model')} name='model' placeholder="Model: 1200PCB" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text"  {...register('type')} name='type' placeholder="Type: PCB" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="number"  {...register('weight')} name='weight' placeholder="weight: 0.3" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="number"  {...register('price')} name='price' placeholder="price: 49" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="number"  {...register('Quantity')} name='Quantity' placeholder="Quantity: 490943" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="file"  {...register('img')} name='img' placeholder="img: Upload file" className="input py-2 input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="Submit" />
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default AddProduct;