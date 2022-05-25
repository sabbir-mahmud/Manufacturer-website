import React from 'react';

const PortfolioBanner = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/Ssc9wxb/IMG-E1835-1.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div className='lg:ml-14'>
                    <h1 className="text-5xl font-bold">SM Sabbir Mahmud</h1>
                    <p className="py-6">Assalamualaikum. I'm Sabbir Mahmud, And I'm a professional full-stack web developer. I'm an expert in || Python || Django || JavaScript || Node.js || React.js || Express.js || I have more than 1.5 Years of experience in Web Developing. If you need a web developer just hire me..</p>
                    <a href='https://www.linkedin.com/in/sabbirmahmudzim/' className="btn btn-primary">Hire Me</a>
                </div>
            </div>
        </div>
    );
};

export default PortfolioBanner;