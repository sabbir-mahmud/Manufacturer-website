import { motion } from "framer-motion";

const faqs = [
    {
        question: "How many products can I order?",
        answer: "You have to order at least a product, but the minimum quantity is 100",
    },
    {
        question: "Can I cancel the order?",
        answer: "Yes. You can cancel your order. If your payment was done then you can't cancel your order.",
    },
    {
        question: "Can I get a refund?",
        answer: "No. You can't get a refund. once your payment was successful you can't get your money back.",
    },
    {
        question: "How do I know if my order is delivered?",
        answer: "When your products were delivered, we will notify you via mail and update delivered to your dashboard.",
    },
    {
        question: "Can I return a damaged product?",
        answer: "Yes, we provide a warranty for every product. If you get a damaged product you can claim a warranty.",
    },
];

const Faq = () => {
    // Container variants for staggered animation
    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
    };

    // Individual item animation
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
            className="mt-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            {/* Section Title */}
            <motion.div className="title my-7" variants={itemVariants}>
                <h3 className="text-3xl text-primary font-bold text-center">
                    Frequently Asked Questions
                </h3>
            </motion.div>

            {/* FAQ Items */}
            {faqs.map((faq, index) => (
                <motion.div
                    key={index}
                    tabIndex="0"
                    className="collapse my-2 collapse-arrow border border-base-300 bg-base-100 rounded-box"
                    variants={itemVariants}
                >
                    <div className="collapse-title text-xl font-medium">
                        {faq.question}
                    </div>
                    <div className="collapse-content">
                        <p>{faq.answer}</p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Faq;
