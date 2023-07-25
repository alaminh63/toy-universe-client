import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const Modify = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [showInfo, setShowInfo] = useState({});
  console.log(showInfo);

  const {
    productName,
    productImage,
    subCategory,
    price,
    availableQuantity,
    rating,
    description,
  } = showInfo;

  useEffect(() => {
    fetch(`https://toy-universe-server-two.vercel.app/toy/${id}`)
      .then((res) => res.json())
      .then((data) => setShowInfo(data));
  }, [id]);

  const handleModify = (event) => {
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

    fetch(`https://toy-universe-server-two.vercel.app/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "",
            text: "Data Updated Successfully!",
            icon: "success",
            confirmButtonColor: "#B2A4FF",
            confirmButtonText: "ok",
          });
        }
      });
  };
  return (
    <div>
      <div>
        <h2>Add Your Toy</h2>
        <form onSubmit={handleModify}>
          <div className="card-body">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Product Name
                    </span>
                  </label>
                  <input
                    type="text"
                    defaultValue={productName}
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
                    defaultValue={productImage}
                    name="productImage"
                    placeholder="Link of your product image"
                    className="input input-bordered  rounded-none border-yellow-400"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Seller Name
                    </span>
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
                    <span className="label-text font-semibold">
                      Seller Email
                    </span>
                  </label>
                  <input
                    type="text"
                    name="sellerEmail"
                    placeholder="Seller Email"
                    defaultValue={user?.email}
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
                    defaultValue={subCategory}
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
                    defaultValue={price}
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
                    defaultValue={availableQuantity}
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
                    defaultValue={rating}
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
                  defaultValue={description}
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
    </div>
  );
};

export default Modify;
