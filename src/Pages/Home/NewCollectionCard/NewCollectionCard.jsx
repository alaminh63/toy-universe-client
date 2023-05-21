import React from "react";

const NewCollectionCard = ({ item }) => {
  const { productImage, sellerName, description } = item;

  return (
    <div>
      <div
        data-aos="zoom-out"
        className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        <img src={productImage} className="w-96 h-[28rem]" />
        <a href="#!">
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
          >
            <div className="flex justify-start items-end h-full">
              <div className="text-white m-6">
                <h5 className="font-bold text-lg mb-3 text-xl font-bold">{sellerName}</h5>
                <p>
                  <small className="font-semibold">{description} </small>
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default NewCollectionCard;
