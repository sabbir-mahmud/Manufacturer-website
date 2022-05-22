import React from 'react';
import Contact from './Contact';
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
            <Contact />


        </section>
    );
};

export default Home;