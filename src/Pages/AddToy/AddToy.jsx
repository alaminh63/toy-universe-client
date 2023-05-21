import React from "react";

const AddToy = () => {
  return (
    <div>
      <h2>Add Your Toy</h2>
      <div className="card-body">
        <div className="grid grid-cols-2">
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
                className="input input-bordered rounded-none border-yellow-400"
              />
            </div>
          </div>
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                placeholder="Type your product name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Image</span>
              </label>
              <input
                type="text"
                placeholder="Link of your product image"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                placeholder="Seller Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <input
                type="text"
                placeholder="Seller Email"
                className="input input-bordered"
              />
            </div>
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
