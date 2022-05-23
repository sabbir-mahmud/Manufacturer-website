import React from 'react';

const NotFound = () => {
    return (
        <div>
            <div className="bg-gray-50 flex items-center">
                <div className="container mx-auto py-28 text-gray-700">
                    <div className="w-full lg:w-1/2 mx-8">
                        <div className="text-7xl text-primary font-dark font-extrabold mb-8"> 404</div>
                        <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
                            Sorry we couldn't find the page you're looking for
                        </p>

                        <a href="/" className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-primary">back to homepage</a>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default NotFound;