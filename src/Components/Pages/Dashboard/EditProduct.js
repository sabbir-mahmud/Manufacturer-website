import Helmet from "react-helmet";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useUser from "../../../Hooks/useFirebase.js/useUser";

const EditProduct = () => {
    const { id } = useParams();
    const { data: product } = useQuery(["editProduct", id], () =>
        fetch(`${process.env.REACT_APP_API_URL}api/products/${id}`).then(
            (res) => res.json()
        )
    );

    const { handleLogout } = useUser();

    const handleProductUpdate = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        const image = e.target.image.files[0];

        formData.append("image", image);
        formData.append("brand", "Mikrotik");
        formData.append("name", e.target.name.value || product?.name);
        formData.append("model", e.target.model.value || product?.model);
        formData.append("price", e.target.price.value || product?.price);
        formData.append("weight", e.target.weight.value || product?.weight);
        formData.append(
            "quantity",
            e.target.quantity.value || product?.quantity
        );
        formData.append(
            "min_order",
            e.target.minOrder.value || product?.min_order
        );
        formData.append(
            "max_order",
            e.target.maxOrder.value || product?.max_order
        );
        formData.append(
            "description",
            e.target.description.value || product?.description
        );

        fetch(`${process.env.REACT_APP_API_URL}api/products/${id}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: formData,
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
            .then((result) => {
                if (result.acknowledged) {
                    toast.info("Product Updated Successfully");
                    e.target.reset();
                }
            });
    };

    return (
        <div className="mb-24 mt-14">
            <Helmet>
                <title>Edit Product</title>
            </Helmet>

            <h3 className="text-2xl my-9 font-bold text-center">
                Edit Product
            </h3>

            <form
                onSubmit={handleProductUpdate}
                className="w-3/4 mx-auto card shadow-2xl bg-base-100"
            >
                <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Text Fields */}
                    {[
                        {
                            label: "Product Name",
                            name: "name",
                            defaultValue: product?.name,
                        },
                        {
                            label: "Model",
                            name: "model",
                            defaultValue: product?.model,
                        },
                        {
                            label: "Weight (kg)",
                            name: "weight",
                            type: "number",
                            step: "0.1",
                            defaultValue: product?.weight,
                        },
                        {
                            label: "Price ($)",
                            name: "price",
                            type: "number",
                            defaultValue: product?.price,
                        },
                        {
                            label: "Quantity",
                            name: "quantity",
                            type: "number",
                            defaultValue: product?.quantity,
                        },
                        {
                            label: "Min Order",
                            name: "minOrder",
                            type: "number",
                            step: "1",
                            defaultValue: product?.min_order,
                        },
                        {
                            label: "Max Order",
                            name: "maxOrder",
                            type: "number",
                            step: "1",
                            defaultValue: product?.max_order,
                        },
                    ].map(
                        ({
                            label,
                            name,
                            type = "text",
                            defaultValue,
                            ...rest
                        }) => (
                            <label key={name} className="form-control">
                                <span className="block mb-1 font-medium">
                                    {label}
                                </span>
                                <input
                                    type={type}
                                    name={name}
                                    defaultValue={defaultValue}
                                    className="input input-bordered"
                                    {...rest}
                                />
                            </label>
                        )
                    )}

                    {/* Description */}
                    <label className="form-control md:col-span-2">
                        <span className="block mb-1 font-medium">
                            Description
                        </span>
                        <textarea
                            name="description"
                            defaultValue={product?.description}
                            className="textarea textarea-bordered"
                            placeholder="Product description..."
                        />
                    </label>

                    {/* File Upload (Your Custom Design) */}
                    <label className="w-full md:col-span-2">
                        <span className="block mb-1 text-gray-700 font-medium">
                            Upload Product Image
                        </span>
                        <input
                            type="file"
                            name="image"
                            className="block w-full text-sm text-gray-600
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0 file:text-sm file:font-semibold
                file:bg-primary file:text-white
                hover:file:bg-primary-focus
                cursor-pointer transition-all"
                        />
                    </label>

                    {/* Submit */}
                    <div className="form-control md:col-span-2 mt-6">
                        <button type="submit" className="btn btn-primary">
                            Update Product
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditProduct;
