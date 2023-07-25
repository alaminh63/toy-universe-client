import React, { useEffect } from "react";
import { useState } from "react";
import TableData from "../../Components/TableData";
import useTitle from "../../Hooks/UseTitle";

const AllToy = () => {
  const [toyInfo, setToyInfo] = useState([]);

  useEffect(() => {
    fetch("https://toy-universe-server-two.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        setToyInfo(data);
      });
  }, []);
  useTitle("AllToy");
  const search = (e) => {
    e.preventDefault();

    fetch(
      `https://toy-universe-server-two.vercel.app/search?query=${e.target.search.value}`
    )
      .then((res) => res.json())
      .then((data) => setToyInfo(data));
  };

  return (
    <div>
      <form
        onSubmit={search}
        className="max-w-[700px]  overflow-hidden relative my-10 h-[50px] mx-w-[500px] min-w-[280px] max-w-7xl rounded-full mx-auto"
      >
        <input
          type="search"
          name="search"
          id=""
          placeholder="search"
          className="placeholder:text-lg h-full border-4 border-orange-500 rounded-full  w-full px-6"
        />
        <input
          type="submit"
          value="search"
          className="bg-orange-500 hover:bg-[#AA77FF] w-[90px] flex justify-between items-center text-center absolute right-0 top-0 h-full px-3 text-white"
        />
      </form>
      <div className="overflow-x-auto">
        <table className="table table-compact w-96 mx-auto mt-5 border-4 ">
          <thead>
            <tr className="">
              <th>Seller Name</th>
              <th>Toys Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>

          {toyInfo.map((toy) => (
            <TableData toy={toy} key={toy._id}></TableData>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllToy;
