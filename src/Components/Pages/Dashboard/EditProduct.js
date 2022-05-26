import React from 'react';
import Helmet from 'react-helmet';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditProduct = () => {
    const { id } = useParams();
    const { data: product } = useQuery(['editProduct', id], () => fetch(`https://young-garden-78103.herokuapp.com/api/products/${id}`).then(res => res.json()));
    const imageStorageKey = 'd6cf365aabe2ff86e40fafe5d6f330c1'

    const handleProductUpdate = async (e) => {
        e.preventDefault();
        let image = e.target.img.files[0];
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        if (image) {
            console.log('images new');
            const formData = new FormData();
            formData.append('image', image);
            fetch(url, {
                method: 'POST',
                body: formData,
            })
                .then(res => res.json())
                .then(result => {
                    if (result.success) {
                        image = result.data.url;
                    }
                })

        } else {
            console.log('images old');
            image = product.img;
        }
        const data = {
            brand: 'Mikrotik',
            name: e.target.productName.value || product?.productName,
            model: e.target.model.value || product?.model,
            price: e.target.price.value || product?.price,
            weight: e.target.weight.value || product?.weight,
            quantity: e.target.Quantity.value || product?.Quantity,
            type: e.target.type.value || product?.type,
            img: e.target.img.value || product?.img,
            minOrder: e.target.minOrder.value || product?.minOrder,
            description: e.target.description.value || product?.description,
        }
        fetch(`https://young-garden-78103.herokuapp.com/api/products/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    toast.info('Product Updated Successfully');
                    e.target.reset();
                }
            })
    }
    return (
        <div>
            <Helmet>
                <title>Edit Product</title>
            </Helmet>

            <form onSubmit={handleProductUpdate}>
                <div className="w-3/4 mx-auto card  shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <input type="text" placeholder={`product name: ${product?.name}`} name='productName' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" name='model' placeholder={`product model: ${product?.model}`} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" name='type' placeholder={`type: ${product?.type}`} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="number" step="0.1" name='weight' placeholder={`weight: ${product?.weight}`} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="number" name='price' placeholder={`price: ${product?.price}`} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="number" name='Quantity' placeholder={`quantity: ${product?.quantity}`} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="number" name='minOrder' placeholder={`min order: ${product?.minOrder}`} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="number" name='description' placeholder={`description: ${product?.description}`} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="file" name='img' placeholder="img: Upload file" className="input py-2 input-bordered" />
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

export default EditProduct;