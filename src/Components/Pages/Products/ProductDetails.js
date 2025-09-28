import { motion } from "framer-motion";
import { useState } from "react";
import Helmet from "react-helmet";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useUser from "../../../Hooks/useFirebase.js/useUser";

const ProductDetails = () => {
    const [btnDisable, setBtnDisable] = useState(false);
    const { user } = useUser();
    const { id } = useParams();
    const { data: product, refetch } = useQuery(["product", id], () =>
        fetch(`${process.env.REACT_APP_API_URL}api/products/${id}`).then(
            (res) => res.json()
        )
    );

    const handleBtn = (e) => {
        const qtn = parseInt(e.target.value);
        const maxOrder = product?.max_order || Number.MAX_SAFE_INTEGER;
        const minOrder = product?.min_order || 1;
        setBtnDisable(qtn > maxOrder || qtn < minOrder);
    };

    const handleOrderSubmit = (e) => {
        e.preventDefault();
        const order = {
            user: user.email,
            productID: product._id,
            amount: product.price * e.target.quantity.value,
            quantity: e.target.quantity.value,
            address: e.target.address.value,
            phone: e.target.phone.value,
        };
        fetch(`${process.env.REACT_APP_API_URL}api/order`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.productID) {
                    toast.success("Order placed successfully");
                    e.target.reset();
                    refetch();
                } else {
                    toast.error(result.message);
                }
            });
    };

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 120, damping: 25 },
        },
    };

    if (!product) return null;

    return (
        <motion.div
            className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <Helmet>
                <title>{product.name}</title>
            </Helmet>

            {/* Image + Key Info */}
            <motion.div
                className="flex flex-col lg:flex-row gap-8 mb-12"
                variants={containerVariants}
            >
                {/* Small Image */}
                <motion.div
                    className="lg:w-1/4 w-full rounded-xl overflow-hidden bg-white p-4 flex justify-center items-center border border-gray-200"
                    whileHover={{ scale: 1.03 }}
                    variants={itemVariants}
                >
                    <motion.img
                        src={product.img}
                        alt={product.name}
                        className="object-contain w-40 h-40 rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 120 }}
                    />
                </motion.div>

                {/* Key Details */}
                <motion.div
                    className="lg:w-3/4 flex flex-col gap-3"
                    variants={itemVariants}
                >
                    <h1 className="text-gray-500 font-medium text-lg">
                        {product.brand}
                    </h1>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        {product.name}
                    </h2>
                    <p className="text-blue-600 font-extrabold text-xl">
                        ${product.price}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-gray-700 mt-2">
                        <p>
                            <strong>Model:</strong> {product.model}
                        </p>
                        <p>
                            <strong>Stock:</strong>{" "}
                            {product.quantity.toLocaleString()}
                        </p>
                        <p>
                            <strong>Weight:</strong> {product.weight} kg
                        </p>
                        <p className="text-sm text-gray-500">
                            <strong>Min Order:</strong> {product.min_order},{" "}
                            <strong>Max Order:</strong> {product.max_order}
                        </p>
                    </div>
                </motion.div>
            </motion.div>

            {/* Full Product Description */}
            <motion.div
                className="bg-white rounded-3xl p-6 shadow-lg mb-12"
                variants={itemVariants}
            >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Product Description
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                    {product.description}
                </p>
            </motion.div>

            {/* Order Form */}
            <motion.form
                onSubmit={handleOrderSubmit}
                className="bg-white rounded-3xl p-8 shadow-xl flex flex-col gap-5"
                variants={itemVariants}
            >
                <h3 className="text-2xl font-bold text-center text-primary mb-4">
                    Place Your Order
                </h3>

                <motion.input
                    type="text"
                    placeholder={user?.email}
                    className="input input-bordered"
                    disabled
                    variants={itemVariants}
                />
                <motion.input
                    type="text"
                    placeholder={user?.displayName}
                    className="input input-bordered"
                    disabled
                    variants={itemVariants}
                />
                <motion.input
                    type="number"
                    name="quantity"
                    placeholder={`Quantity (min ${product.min_order}, max ${product.max_order})`}
                    className="input input-bordered"
                    onChange={handleBtn}
                    variants={itemVariants}
                />
                <motion.input
                    type="number"
                    name="phone"
                    placeholder="Phone Number"
                    className="input input-bordered"
                    variants={itemVariants}
                />
                <motion.input
                    type="text"
                    name="address"
                    placeholder="Address"
                    className="input input-bordered"
                    variants={itemVariants}
                />
                <motion.button
                    type="submit"
                    disabled={btnDisable}
                    className="btn btn-primary mt-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    variants={itemVariants}
                >
                    Order Now
                </motion.button>
            </motion.form>
        </motion.div>
    );
};

export default ProductDetails;
