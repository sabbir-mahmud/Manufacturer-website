import { motion } from "framer-motion";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import HomeProduct from "./HomeProduct";

const HomeProducts = () => {
    const navigate = useNavigate();
    const { data: products, isLoading } = useQuery("products", () => {
        return fetch(`${process.env.REACT_APP_API_URL}api/products/`).then(
            (response) => response.json()
        );
    });

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
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

    return (
        <motion.div
            className="mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <motion.h2
                className="text-4xl text-primary font-bold text-center mb-12"
                variants={itemVariants}
            >
                Our Products
            </motion.h2>

            <motion.div
                className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
            >
                {isLoading ? (
                    <Loading />
                ) : (
                    products
                        ?.slice(0, 6)
                        ?.map((product) => (
                            <HomeProduct
                                key={product._id}
                                product={product}
                                as={motion.div}
                                variants={itemVariants}
                            />
                        ))
                )}
            </motion.div>

            {/* Show More Button */}
            {!isLoading && products?.length > 6 && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => navigate("/products")}
                        className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary/90 transition"
                    >
                        Show More
                    </button>
                </div>
            )}
        </motion.div>
    );
};

export default HomeProducts;
