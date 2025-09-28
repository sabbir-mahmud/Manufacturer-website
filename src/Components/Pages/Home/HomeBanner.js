import { motion } from "framer-motion";

const HomeBanner = () => {
    // Common animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 20 },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95, x: -50 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { type: "spring", stiffness: 90, damping: 20 },
        },
    };

    return (
        <motion.div
            className="hero min-h-screen bg-base-100 px-4 sm:px-6 lg:px-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="hero-content flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
                {/* Image Section */}
                <motion.div
                    className="flex-1 w-full max-w-lg lg:max-w-xl order-first lg:order-none"
                    variants={imageVariants}
                >
                    <img
                        className="rounded-2xl w-full h-[250px] sm:h-[300px] lg:h-[500px] object-cover mx-auto"
                        src="https://www.ryans.com/storage/products/main/cisco-isr-1100-4-ports-integrated-services-11711521395.webp"
                        alt="Cisco Router"
                    />
                </motion.div>

                {/* Text Section */}
                <motion.div
                    className="flex-1 text-center lg:text-left"
                    variants={containerVariants}
                >
                    <motion.h1
                        className="text-3xl sm:text-4xl lg:text-5xl text-primary font-bold mb-4"
                        variants={itemVariants}
                    >
                        Upcoming Router!
                    </motion.h1>

                    <motion.p
                        className="text-primary text-base sm:text-lg lg:text-xl leading-relaxed mb-6"
                        variants={itemVariants}
                    >
                        The Cisco ISR 1100 4 Ports Integrated Services Ethernet
                        Router offers reliable performance for diverse
                        networking needs. Designed for small to medium-sized
                        businesses, it provides robust connectivity and security
                        with four Ethernet ports. This router integrates
                        multiple services to streamline network management and
                        operations.
                    </motion.p>

                    <motion.button
                        className="btn btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 rounded-xl shadow-md"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        variants={itemVariants}
                    >
                        Browse Products
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default HomeBanner;
