const HomeBanner = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row gap-12">
                <div className="flex-1">
                    <img
                        className="rounded-2xl w-full h-full max-h-[600px] object-cover"
                        src="https://www.ryans.com/storage/products/main/cisco-isr-1100-4-ports-integrated-services-11711521395.webp"
                        alt="Cisco Router"
                    />
                </div>
                <div className="flex-1">
                    <h1 className="text-5xl text-primary font-bold">
                        Upcoming Router!
                    </h1>
                    <p className="py-6 text-primary leading-relaxed">
                        The Cisco ISR 1100 4 Ports Integrated Services Ethernet
                        Router offers reliable performance for diverse
                        networking needs. Designed for small to medium-sized
                        businesses, it provides robust connectivity and security
                        with four Ethernet ports. This router integrates
                        multiple services to streamline network management and
                        operations.
                    </p>
                    <button className="btn btn-primary text-base-100 px-8 py-3 text-lg rounded-xl shadow-md">
                        Browse Products
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
