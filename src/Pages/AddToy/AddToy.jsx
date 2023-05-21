import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2>Add Your Toy</h2>
      <div className="card-body">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Product Name</span>
              </label>
              <input
                type="text"
                placeholder="Type your product name"
                className="input input-bordered rounded-none border-yellow-400"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Product Image</span>
              </label>
              <input
                type="text"
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
                placeholder="Seller Email"
                defaultValue={user.email}
                className="input input-bordered rounded-none border-yellow-400"
              />
            </div>
          </div>
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Sub Catergory</span>
              </label>
              <input
                type="text"
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
                placeholder="Available Quentity "
                className="input input-bordered  rounded-none border-yellow-400"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Rating</span>
              </label>
              <input
                type="text"
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
    </div>
  );
};

export default AddToy;
