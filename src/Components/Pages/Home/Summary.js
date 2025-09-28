import { motion } from "framer-motion";

const Summary = () => {
    const date = new Date();

    // Variants
    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.15 },
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

    return (
        <motion.div
            className="mt-9"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="bg-white text-primary border border-gray-200 shadow rounded-lg overflow-hidden">
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4"
                    variants={containerVariants}
                >
                    {/* Stat Items */}
                    {[
                        {
                            title: "Daily Order",
                            value: "31K",
                            desc: date.toDateString(),
                            icon: (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            ),
                        },
                        {
                            title: "Daily Completion Rate",
                            value: "99.9%",
                            desc: date.toDateString(),
                            icon: (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            ),
                        },
                        {
                            title: "Total Client",
                            value: "4200",
                            desc: "↗︎ 400 (22%)",
                            icon: (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                />
                            ),
                        },
                        {
                            title: "Pending Delivery",
                            value: "120900",
                            desc: "↘︎ 90 (14%)",
                            icon: (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                                />
                            ),
                        },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center sm:items-start bg-gray-50 p-4 rounded-lg"
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.03,
                                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                            }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <div className="flex items-center mb-2">
                                <div className="stat-figure text-secondary mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="w-6 h-6 sm:w-8 sm:h-8 stroke-current"
                                    >
                                        {stat.icon}
                                    </svg>
                                </div>
                                <div className="stat-title font-medium text-sm sm:text-base">
                                    {stat.title}
                                </div>
                            </div>
                            <div className="stat-value text-xl sm:text-2xl font-bold">
                                {stat.value}
                            </div>
                            <div className="stat-desc text-gray-500 text-xs sm:text-sm">
                                {stat.desc}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Summary;
