import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthProvider";
import "react-tabs/style/react-tabs.css";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";

const TabCompo = () => {
  const { user } = useContext(AuthContext);
  const [tabI, setTabI] = useState(2);
  const [subCategory, setSubCategory] = useState("SuperHero Toys");
  const [tab, setTab] = useState([]);

  useEffect(() => {
    fetch(
      `https://toy-universe-server-bay.vercel.app/tabs?sub_category=${subCategory}`
    )
      .then((res) => res.json())
      .then((data) => setTab(data));
  }, [subCategory]);

  const handleCategory = (sub) => {
    setSubCategory(sub);
  };

  const handelTost = () => {
    if (!user) {
      toast.error("You Have To Login First To View Details");
    }
  };

  return (
    <Tabs
      className="max-w-[1240px] mx-auto text-center "
      selectedIndex={tabI}
      onSelect={(index) => setTabI(index)}
    >
      <TabList>
        <Tab onClick={() => handleCategory("marvel")}>Marvel</Tab>
        <Tab onClick={() => handleCategory("transformer")}>Transformer</Tab>
        <Tab onClick={() => handleCategory("dc")}>DC</Tab>
      </TabList>
      <TabPanel>
        <div className="grid md:grid-cols-3 gap-10 mt-10 p-4">
          {tab.map((tab) => (
            <>
              <div key={tab._id} className="border rounded-md shadow ">
                <img
                  className=" mx-auto h-96 object-cover rounded-md border p-5"
                  src={tab.photo_url}
                  alt=""
                />
                <div className="">
                  <h1 className="text-xl mt-6">
                    Name: <span className="font-semibold">{tab.name}</span>
                  </h1>
                  <p className="my-2">Price: {tab.price}</p>
                  <div className="my-2 flex items-center justify-center gap-2">
                    <span>{tab.rating}</span>{" "}
                    <Rating
                      style={{ maxWidth: 120 }}
                      value={tab.rating}
                      readOnly
                    />
                  </div>
                  <button
                    onClick={handelTost}
                    className="bg-[#B2A4FF] hover:bg-[#AA77FF] my-4 mb-6 px-6 py-2 rounded text-white"
                  >
                    <Link to={`/toyInfo/${tab._id}`}>View Details</Link>
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid md:grid-cols-3 gap-4 mt-10 p-4">
          {tab.map((tab) => (
            <>
              <div key={tab._id} className="border rounded-md shadow">
                <img
                  className="mx-auto h-96 object-cover rounded-md border p-5"
                  src={tab.productImage}
                  alt=""
                />
                <div>
                  <h1 className="text-xl mt-6">
                    Name:{" "}
                    <span className="font-semibold">{tab.productName}</span>
                  </h1>
                  <p className="my-2">Price: {tab.price}</p>
                  <div className="my-2 flex items-center justify-center gap-2">
                    <span>{tab.rating}</span>{" "}
                    <Rating
                      style={{ maxWidth: 120 }}
                      value={tab.rating}
                      readOnly
                    />
                  </div>
                </div>
                <button
                  onClick={handelTost}
                  className="bg-[#B2A4FF] hover:bg-[#AA77FF] my-4 mb-6 px-6 py-2 rounded text-white"
                >
                  <Link to={`/toyInfo/${tab._id}`}>View Details</Link>
                </button>
              </div>
            </>
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {tab.map((tab) => (
            <>
              <div key={tab._id} className="border rounded-md shadow">
                <img
                  className="mx-auto h-96 object-cover rounded-md border p-5"
                  src={tab.productImage}
                  alt=""
                />
                <div>
                  <h1 className="text-xl mt-6">
                    Name:{" "}
                    <span className="font-semibold">{tab.productName}</span>
                  </h1>
                  <p className="my-2">Price: {tab.price}</p>
                  <div className="my-2 flex items-center justify-center gap-2">
                    <span>{tab.rating}</span>{" "}
                    <Rating
                      style={{ maxWidth: 120 }}
                      value={tab.rating}
                      readOnly
                    />
                  </div>
                </div>
                <button
                  onClick={handelTost}
                  className="bg-[#B2A4FF] hover:bg-[#AA77FF] my-4 mb-6 px-6 py-2 rounded text-white"
                >
                  <Link to={`/toyInfo/${tab._id}`}>View Details</Link>
                </button>
              </div>
            </>
          ))}
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default TabCompo;
