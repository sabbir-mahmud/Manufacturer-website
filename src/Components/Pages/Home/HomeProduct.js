import { Link } from "react-router-dom";

const HomeProduct = ({ product }) => {
    const clamp2 = {
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
    };

    return (
        <div className="max-w-sm mx-auto bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition duration-300 flex flex-col">
            {/* Product Image */}
            <div className="w-full h-56 bg-white flex items-center justify-center overflow-hidden rounded-t-xl">
                <img
                    src={product.img}
                    alt={product.name}
                    className="object-contain w-full h-full"
                />
            </div>

            {/* Product Info */}
            <div className="p-5 text-gray-800 flex flex-col flex-1">
                <h2 className="text-lg font-semibold mb-2 truncate">
                    {product.name}
                </h2>

                <p className="text-sm text-gray-600">Model: {product.model}</p>
                <p className="text-base font-bold text-blue-600 mt-1">
                    ${product.price}
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mt-2">
                    <p>Weight: {product.weight}</p>
                    <p>Qty: {product.quantity}</p>
                    <p>Min Order: {product.minOrder}</p>
                </div>

                {/* Truncated Description */}
                <p style={clamp2} className="text-sm text-gray-700 mt-3">
                    {product.description}
                </p>

                {/* Badge + Button pinned bottom */}
                <div className="flex items-center justify-between mt-auto pt-4">
                    <Link
                        to={`/products/${product._id}`}
                        className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                    >
                        Order
                        <svg
                            className="ml-2 w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 
                6a1 1 0 010 1.414l-6 
                6a1 1 0 01-1.414-1.414L14.586 
                11H3a1 1 0 110-2h11.586l-4.293-4.293a1 
                1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeProduct;
