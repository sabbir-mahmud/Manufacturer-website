import { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useUser from "../../../Hooks/useFirebase.js/useUser";
import DeleteProductModal from "./DeleteProductModal";

const ManageProduct = () => {
    const { handleLogout } = useUser();
    const { data: products, refetch } = useQuery("manageProducts", () =>
        fetch(`${process.env.REACT_APP_API_URL}api/products/`).then((res) =>
            res.json()
        )
    );
    const [delProduct, setDelProduct] = useState({});

    const handleDelete = (id) => {
        fetch(`${process.env.REACT_APP_API_URL}api/products/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => {
                if (res.status === 401 || res.status === 403) {
                    handleLogout();
                    return toast.error(
                        "You are not authorized to perform this action"
                    );
                }
                return res.json();
            })
            .then(() => {
                refetch();
                setDelProduct({});
                toast.info("Product deleted successfully");
            });
    };

    return (
        <div className="w-full">
            {/* ✅ Inline CSS added directly inside component */}
            <style>{`
                .truncate-2-lines {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>

            {delProduct._id && (
                <DeleteProductModal
                    delProduct={delProduct}
                    handleDelete={handleDelete}
                />
            )}

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-separate border-spacing-y-2 text-sm">
                    <thead>
                        <tr className="text-left text-gray-500 uppercase text-xs">
                            <th className="pb-2">Product</th>
                            <th className="pb-2 w-48">Model</th>
                            <th className="pb-2">Type</th>
                            <th className="pb-2 text-right">Price</th>
                            <th className="pb-2 text-center">Qty</th>
                            <th className="pb-2 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((product) => (
                            <tr
                                key={product._id}
                                className="bg-white shadow-sm rounded-lg hover:shadow-md transition"
                            >
                                <td className="p-3 font-medium">
                                    {product.name}
                                </td>
                                <td className="p-3 max-w-[180px]">
                                    <p
                                        className="truncate-2-lines"
                                        title={product.model}
                                    >
                                        {product.model}
                                    </p>
                                </td>
                                <td className="p-3 capitalize">
                                    {product.type}
                                </td>
                                <td className="p-3 text-right font-semibold">
                                    ${product.price}
                                </td>
                                <td className="p-3 text-center">
                                    {product.quantity}
                                </td>
                                <td className="p-3 flex gap-3 justify-center">
                                    <Link
                                        className="text-blue-600 hover:underline"
                                        to={`/dashboard/manage-Product/${product._id}`}
                                    >
                                        ✏️
                                    </Link>
                                    <button
                                        className="text-red-600 hover:underline"
                                        onClick={() => setDelProduct(product)}
                                    >
                                        🗑️
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Card Layout */}
            <div className="md:hidden space-y-3">
                {products?.map((product) => (
                    <div
                        key={product._id}
                        className="bg-white p-4 shadow rounded-lg"
                    >
                        <div className="font-semibold text-lg">
                            {product.name}
                        </div>
                        <div className="text-gray-500 text-sm truncate-2-lines">
                            {product.model}
                        </div>
                        <div className="flex justify-between items-center mt-3 text-sm">
                            <span className="capitalize">{product.type}</span>
                            <span className="font-bold">${product.price}</span>
                        </div>
                        <div className="flex justify-between mt-4">
                            <Link
                                className="px-3 py-1 bg-blue-100 text-blue-600 rounded-md"
                                to={`/dashboard/manage-Product/${product._id}`}
                            >
                                Edit
                            </Link>
                            <button
                                className="px-3 py-1 bg-red-100 text-red-600 rounded-md"
                                onClick={() => setDelProduct(product)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageProduct;
