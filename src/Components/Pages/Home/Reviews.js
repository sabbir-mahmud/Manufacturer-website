import { motion } from "framer-motion";
import { useQuery } from "react-query";
import Review from "./Review";

const Reviews = () => {
    const { data: reviews } = useQuery("reviews", () => {
        return fetch(`${process.env.REACT_APP_API_URL}api/reviews`).then(
            (res) => res.json()
        );
    });

    // Variants for section and staggered cards
    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
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
            className="mb-5 mt-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <motion.div className="title mb-24" variants={itemVariants}>
                <h3 className="text-4xl text-primary font-bold text-center">
                    Clients Reviews
                </h3>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
            >
                {reviews?.map((review) => (
                    <Review
                        key={review._id}
                        review={review}
                        variants={itemVariants}
                    />
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Reviews;
