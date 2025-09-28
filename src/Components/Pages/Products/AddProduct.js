import Helmet from "react-helmet";
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();

        formData.append("image", data.image?.[0]);
        formData.append("brand", "Mikrotik");
        formData.append("name", data.name);
        formData.append("model", data.model);
        formData.append("type", data.type);
        formData.append("price", data.price);
        formData.append("weight", data.weight);
        formData.append("quantity", data.quantity);
        formData.append("min_order", data.minOrder);
        formData.append("max_order", data.maxOrder);
        formData.append("description", data.description);

        fetch(`${process.env.REACT_APP_API_URL}api/products/`, {
            method: "POST",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: formData,
        })
            .then((res) => res.json())
            .then((result) => console.log(result));

        reset();
    };

    return (
        <div className="mb-24 mt-14">
            <Helmet>
                <title>Add Product</title>
            </Helmet>

            <h3 className="text-2xl my-9 font-bold text-center">Add Product</h3>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-3/4 mx-auto card shadow-2xl bg-base-100"
            >
                <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Text Fields */}
                    {[
                        {
                            label: "Product Name",
                            name: "name",
                            placeholder: "Mikrotik 1200PCB",
                        },
                        {
                            label: "Model",
                            name: "model",
                            placeholder: "1200PCB",
                        },
                        { label: "Type", name: "type", placeholder: "PCB" },
                        {
                            label: "Weight (kg)",
                            name: "weight",
                            type: "number",
                            step: "0.1",
                            placeholder: "0.3",
                        },
                        {
                            label: "Price ($)",
                            name: "price",
                            type: "number",
                            placeholder: "49",
                        },
                        {
                            label: "Quantity",
                            name: "quantity",
                            type: "number",
                            placeholder: "500",
                        },
                        {
                            label: "Min Order",
                            name: "minOrder",
                            type: "number",
                            step: "1",
                            placeholder: "10",
                        },
                        {
                            label: "Max Order",
                            name: "maxOrder",
                            type: "number",
                            step: "1",
                            placeholder: "100",
                        },
                    ].map(({ label, name, type = "text", ...rest }) => (
                        <label key={name} className="form-control">
                            <span className="block mb-1 font-medium">
                                {label}
                            </span>
                            <input
                                type={type}
                                {...register(name, { required: true })}
                                className="input input-bordered"
                                {...rest}
                            />
                        </label>
                    ))}

                    {/* Description */}
                    <label className="form-control md:col-span-2">
                        <span className="block mb-1 font-medium">
                            Description
                        </span>
                        <textarea
                            {...register("description")}
                            className="textarea textarea-bordered"
                            placeholder="This product is used for..."
                        />
                    </label>

                    {/* File Upload (Your Custom Design) */}
                    <label className="w-full md:col-span-2">
                        <span className="block mb-1 text-gray-700 font-medium">
                            Upload Product Image
                        </span>
                        <input
                            type="file"
                            {...register("image", { required: true })}
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
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
