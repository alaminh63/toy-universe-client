import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ToyInfo = () => {
  const [toyData, setToyData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://toy-universe-server-bay.vercel.app/toy/${id}`)
      .then((res) => res.json())
      .then((data) => setToyData(data));
  }, []);

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
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={productImage} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-2xl font-bold">Box {productName}</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyInfo;
