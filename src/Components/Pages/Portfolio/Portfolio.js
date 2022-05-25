import React from 'react';
import Helmet from 'react-helmet';
import Contact from './Contact';
import Projects from './Projects';
import PortfolioBanner from './ProtfolioBanner';
import Skills from './Skills';

const Portfolio = () => {
    return (
        <div className='container mx-auto'>
            <Helmet>
                <title>Portfolio | Sabbir Mahmud</title>
            </Helmet>
            <PortfolioBanner />
            <Contact />
            <Skills />
            <Projects />

        </div>
    );
};

export default Portfolio;