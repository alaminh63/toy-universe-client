import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useTitle from "../../Hooks/UseTitle";

const ToyInfo = () => {
  const [toyData, setToyData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://toy-universe-server-two.vercel.app/toy/${id}`)
      .then((res) => res.json())
      .then((data) => setToyData(data));
  }, []);
  useTitle("ToyInfo");
  const {
    productName,
    productImage,
    sellerName,
    sellerEmail,
    subCategory,
    price,
    availableQuantity,
    rating,
    description,
  } = toyData;
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 max-w-[1000px] mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={productImage} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-2xl font-bold">Box {productName}</h1>
            <p className="font-semibold  pl-5">Seller Name:{sellerName}</p>
            <p className="font-semibold pl-5">Seller Email:{sellerEmail}</p>
            <p className="font-semibold pl-5">Sub Category:{subCategory}</p>
            <p className="font-semibold pl-5">
              Available Quentity:{availableQuantity}
            </p>
            <p className="font-semibold pl-5">Price:{price}$</p>
            <p className="font-semibold pl-5">Rating:{rating}$</p>
            <p className="font-semibold pl-5">Description:{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyInfo;
