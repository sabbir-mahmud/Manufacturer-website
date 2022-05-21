import React from 'react';

const HomeProduct = () => {
    return (
        <div className="card w-96 bg-primary text-white shadow-xl">
            <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline py-3 px-5">Fashion</div>
                    <div className="badge badge-outline py-3 px-5">Products</div>
                </div>
            </div>
        </div>
    );
};

export default HomeProduct;