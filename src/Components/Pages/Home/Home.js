import React from 'react';
import HomeBanner from './HomeBanner';
import HomeCarousel from './HomeCarousel';
import HomeProducts from './HomeProducts';
const Home = () => {
    return (
        <section className='container mx-auto'>
            <div className="banner">
                <HomeBanner />
            </div>
            <div className="products">
                <HomeProducts />
            </div>
            <div>
                <div className="mt-5 mb-24">
                    <h2 className="text-primary font-bold text-4xl text-center">Images Gallery</h2>
                </div>
                <HomeCarousel />
            </div>

        </section>
    );
};

export default Home;