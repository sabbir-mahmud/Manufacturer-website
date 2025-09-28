const HomeBanner = () => {
    return (
        <div className="hero min-h-screen bg-base-100 px-4 sm:px-6 lg:px-16">
            <div className="hero-content flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
                {/* Image Section */}
                <div className="flex-1 w-full max-w-lg lg:max-w-xl order-first lg:order-none">
                    <img
                        className="rounded-2xl w-full h-[250px] sm:h-[300px] lg:h-[500px] object-cover mx-auto"
                        src="https://www.ryans.com/storage/products/main/cisco-isr-1100-4-ports-integrated-services-11711521395.webp"
                        alt="Cisco Router"
                    />
                </div>

                {/* Text Section */}
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl text-primary font-bold mb-4">
                        Upcoming Router!
                    </h1>
                    <p className="text-primary text-base sm:text-lg lg:text-xl leading-relaxed mb-6">
                        The Cisco ISR 1100 4 Ports Integrated Services Ethernet
                        Router offers reliable performance for diverse
                        networking needs. Designed for small to medium-sized
                        businesses, it provides robust connectivity and security
                        with four Ethernet ports. This router integrates
                        multiple services to streamline network management and
                        operations.
                    </p>
                    <button className="btn btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 rounded-xl shadow-md">
                        Browse Products
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
