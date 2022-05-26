import React from 'react';

const HomeBanner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img className='rounded-xl' src="https://i.ibb.co/5rh2KzS/istockphoto-899016436-612x612.jpg" alt='' />
                <div className='lg:ml-24'>
                    <h1 className="text-5xl text-primary font-bold">Upcoming Battery!</h1>
                    <p className="py-6 text-primary">We are almost ready to launch our new product lithium polymer battery. You can use this as hybrid solar, ips, ups. To know more about this product and released date keep eye on this site...</p>
                    <button className="btn btn-primary text-base-100">Browse Products</button>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;