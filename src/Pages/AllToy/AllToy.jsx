import React, { useEffect } from "react";
import { useState } from "react";
import TableData from "../../Components/TableData";

const AllToy = () => {
  const [toyInfo, setToyInfo] = useState([]);
  useEffect(() => {
    fetch("https://toy-universe-server-bay.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        setToyInfo(data);
      });
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-96 mx-auto mt-10 ">
          <thead>
            <tr>
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
