import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const body = JSON.stringify({
            email: e.target.email.value,
            phone: e.target.phone.value,
            msg: e.target.msg.value,
        });

        fetch(`${process.env.REACT_APP_API_URL}api/contact`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body,
        }).then((res) => res.json());

        toast.info("Thanks, we will contact you soon!");
        e.target.reset();
    };

    // Variants
    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
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
        <motion.section
            className="bg-gray-50 py-12 sm:py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    {/* Left side - text */}
                    <motion.div
                        className="flex-1 text-center lg:text-left"
                        variants={itemVariants}
                    >
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
                            Contact <span className="text-primary">Us</span>
                        </h1>
                        <p className="mt-4 sm:mt-6 text-gray-600 leading-relaxed text-sm sm:text-base">
                            Unsure about starting your new business? 💡 Get in
                            touch with our specialist team for a high-level
                            consultation. Fill out the form, and our experts
                            will get back to you as soon as possible.
                        </p>
                    </motion.div>

                    {/* Right side - form */}
                    <motion.div
                        className="flex-1 w-full max-w-md mx-auto lg:mx-0"
                        variants={itemVariants}
                    >
                        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sm:p-8">
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-4 sm:space-y-6"
                            >
                                {/* Email */}
                                <div className="form-control">
                                    <label className="label font-medium text-gray-700">
                                        <span>Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition"
                                        required
                                    />
                                </div>

                                {/* Phone */}
                                <div className="form-control">
                                    <label className="label font-medium text-gray-700">
                                        <span>Phone</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition"
                                        required
                                    />
                                </div>

                                {/* Message */}
                                <div className="form-control">
                                    <label className="label font-medium text-gray-700">
                                        <span>Message</span>
                                    </label>
                                    <textarea
                                        name="msg"
                                        rows="4"
                                        placeholder="Type your message..."
                                        className="textarea textarea-bordered w-full rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition"
                                        required
                                    ></textarea>
                                </div>

                                {/* Submit */}
                                <motion.button
                                    type="submit"
                                    className="btn btn-primary w-full rounded-lg py-3 text-white text-sm sm:text-base hover:shadow-md transition"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
