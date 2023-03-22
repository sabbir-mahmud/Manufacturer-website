import React from "react";
import Helmet from "react-helmet";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const imageStorageKey = "d6cf365aabe2ff86e40fafe5d6f330c1";

  const onSubmit = async (data) => {
    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);
    formData.append("brand", "Mikrotik");
    formData.append("name", data.productName);
    formData.append("model", data.model);
    formData.append("price", data.price);
    formData.append("weight", data.weight);
    formData.append("quantity", data.Quantity);
    formData.append("min_order", data.minOrder);
    formData.append("max_order", data.data);
    formData.append("description", data.description);
    formData.append("type", data.type);
    const url = `http://localhost:5000/api/products/`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="mb-24 mt-14">
      <Helmet>
        <title>Add Product</title>
      </Helmet>
      <div className="title">
        <h3 className="text-2xl my-9 font-bold text-center">Add Products</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-3/4 mx-auto card  shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <input
                type="text"
                {...register("productName")}
                placeholder="Product Name: Mikrotik 1200PCB"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                {...register("model")}
                name="model"
                placeholder="Model: 1200PCB"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                {...register("type")}
                name="type"
                placeholder="Type: PCB"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                step="0.1"
                {...register("weight")}
                name="weight"
                placeholder="weight: 0.3"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                {...register("price")}
                name="price"
                placeholder="price: 49"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                step="0.1"
                {...register("Quantity")}
                name="Quantity"
                placeholder="Quantity: 490943"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                step="0.1"
                {...register("minOrder")}
                name="minOrder"
                placeholder="min order: 53"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                {...register("description")}
                name="description"
                placeholder="description: this product use"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="file"
                {...register("img")}
                name="img"
                placeholder="img: Upload file"
                className="input py-2 input-bordered"
              />
            </div>

            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
