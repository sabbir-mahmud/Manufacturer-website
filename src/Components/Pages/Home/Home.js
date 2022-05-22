import React from 'react';
import Faq from './Faq';
import HomeBanner from './HomeBanner';
import HomeProducts from './HomeProducts';
import Reviews from './Reviews';
import Summary from './Summary';
const Home = () => {
    return (
        <section className='container mx-auto'>
            <div className="banner">
                <HomeBanner />
            </div>
            <div className="products">
                <HomeProducts />
            </div>

            <Reviews />
            <Summary />
            <Faq />


        </section>
    );
};

export default Home;