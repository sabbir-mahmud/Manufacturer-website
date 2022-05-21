import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import HomeProduct from './HomeProduct';

const HomeProducts = () => {
    const { data: products, isLoading } = useQuery('products', () => {
        return fetch('http://localhost:5000/api/home/products')
            .then(response => response.json())
    });
    return (
        <div>
            <div className='mb-16'>
                <h2 className='text-4xl text-primary font-bold text-center'>Our Products</h2>
            </div>
            <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    isLoading ? <Loading /> : products?.map(product => <HomeProduct
                        key={product._id}
                        product={product}
                    >
                    </HomeProduct>)
                }
            </div>
            <div className='mt-12 mb-24'>
                <Link className='bg-primary text-white px-5 py-3 rounded-md shadow text-uppercase' to='/'>Browse Products</Link>
            </div>

        </div>
    );
};

export default HomeProducts;