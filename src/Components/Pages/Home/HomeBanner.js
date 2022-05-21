import React from 'react';

const HomeBanner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img className='rounded-xl' src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJhdHRlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500" alt='' />
                <div className='ml-24'>
                    <h1 className="text-5xl text-primary font-bold">Upcoming Battery!</h1>
                    <p className="py-6 text-primary">We are almost ready to launch our new product lithium polymer battery. You can use this as hybrid solar, ips, ups. To know more about this product and released date keep eye on this site...</p>
                    <button className="btn btn-primary text-base-100">Browse Products</button>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;