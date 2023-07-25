import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import NewCollectionCard from "../NewCollectionCard/NewCollectionCard";

const NewCollection = () => {
  const [collection, setCollection] = useState([]);
  useEffect(() => {
    fetch("https://toy-universe-server-two.vercel.app/toys2")
      .then((res) => res.json())
      .then((data) => setCollection(data));
  }, []);
  console.log(collection);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800">
          <h2 className="text-3xl text-orange-500 underline font-bold mb-12 text-center">
            Most Sold Items
          </h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {collection.map((item) => (
              <NewCollectionCard item={item}></NewCollectionCard>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewCollection;
