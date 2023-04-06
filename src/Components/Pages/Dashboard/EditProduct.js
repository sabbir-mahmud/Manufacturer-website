import React from "react";
import Helmet from "react-helmet";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useUser from "../../../Hooks/useFirebase.js/useUser";

const EditProduct = () => {
  const { id } = useParams();
  const { data: product } = useQuery(["editProduct", id], () =>
    fetch(`http://localhost:5000/api/products/${id}`).then((res) => res.json())
  );
  const imageStorageKey = "d6cf365aabe2ff86e40fafe5d6f330c1";
  const { handleLogout } = useUser();

  const handleProductUpdate = async (e) => {
    e.preventDefault();
    let image = e.target.img.files[0];
    const formData = new FormData();
    formData.append("image", image);
    formData.append("brand", "Mikrotik");
    formData.append("name", e.target.productName.value || product?.productName);
    formData.append("model", e.target.model.value || product?.model);
    formData.append("price", e.target.price.value || product?.price);
    formData.append("weight", e.target.weight.value || product?.weight);
    formData.append("quantity", e.target.Quantity.value || product?.quantity);
    formData.append("min_order", e.target.minOrder.value || product?.min_order);
    formData.append("max_order", e.target.maxOrder.value || product?.max_order);
    formData.append(
      "description",
      e.target.description.value || product?.description
    );
    console.log(formData);
    fetch(`http://localhost:5000/api/products/${id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: formData,
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          handleLogout();
          return toast.error("You are not authorized to perform this action");
        } else {
          return res.json();
        }
      })
      .then((result) => {
        if (result.acknowledged) {
          toast.info("Product Updated Successfully");
          e.target.reset();
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Edit Product</title>
      </Helmet>

      <form onSubmit={handleProductUpdate}>
        <div className="w-3/4 mx-auto card  shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <input
                type="text"
                placeholder={`product name: ${product?.name}`}
                name="productName"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="model"
                placeholder={`product model: ${product?.model}`}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                step="0.1"
                name="weight"
                placeholder={`weight: ${product?.weight}`}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                name="price"
                placeholder={`price: ${product?.price}`}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                name="Quantity"
                placeholder={`quantity: ${product?.quantity}`}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                name="minOrder"
                placeholder={`min order: ${product?.min_order}`}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                name="maxOrder"
                placeholder={`min order: ${product?.max_order}`}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="description"
                placeholder={`description: ${product?.description}`}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="file"
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

export default EditProduct;
