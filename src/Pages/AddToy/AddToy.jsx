import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthProvider";
import useTitle from "../../Hooks/UseTitle";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  useTitle("AddToy");
  const handleAddItems = (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const productImage = form.productImage.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const availableQuantity = form.availableQuantity.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const toy = {
      productName,
      productImage,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      availableQuantity,
      rating,
      description,
    };
    console.log(toy);
    fetch("https://toy-universe-server-bay.vercel.app/add-toy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "",
            text: "Data Inserted Successfully!",
            icon: "success",
            confirmButtonColor: "#B2A4FF",
            confirmButtonText: "ok",
          });
        }
      });
  };
  return (
    <div className="max-w-[1140px] mx-auto">
      <h2 className="text-3xl font-bold text-orange-500 text-center mt-6 underline">Add Your Toy</h2>
      <form onSubmit={handleAddItems}>
        <div className="card-body">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Product Name</span>
                </label>
                <input
                  type="text"
                  name="productName"
                  placeholder="Type your product name"
                  className="input input-bordered rounded-none border-yellow-400"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Product Image
                  </span>
                </label>
                <input
                  type="text"
                  name="productImage"
                  placeholder="Link of your product image"
                  className="input input-bordered  rounded-none border-yellow-400"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Seller Name</span>
                </label>
                <input
                  type="text"
                  name="sellerName"
                  defaultValue={user?.displayName}
                  placeholder="Seller Name"
                  className="input input-bordered  rounded-none border-yellow-400"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Seller Email</span>
                </label>
                <input
                  type="text"
                  name="sellerEmail"
                  placeholder="Seller Email"
                  defaultValue={user.email}
                  className="input input-bordered rounded-none border-yellow-400"
                />
              </div>
            </div>
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Sub Catergory
                  </span>
                </label>
                <input
                  type="text"
                  name="subCategory"
                  placeholder="Sub Category"
                  className="input input-bordered rounded-none border-yellow-400"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="Price $"
                  className="input input-bordered  rounded-none border-yellow-400"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Available Quantity
                  </span>
                </label>
                <input
                  type="text"
                  name="availableQuantity"
                  placeholder="Available Quantity "
                  className="input input-bordered  rounded-none border-yellow-400"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Rating</span>
                </label>
                <input
                  type="text"
                  name="rating"
                  placeholder="Rating"
                  className="input input-bordered rounded-none border-yellow-400"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="input input-bordered rounded-none border-yellow-400 py-16"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary"
              type="submit"
              value="Add Your Toy"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
