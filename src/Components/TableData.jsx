import React from "react";
import { Link } from "react-router-dom";

const TableData = ({ toy }) => {
  const {
    _id,
    productName,
    sellerName,
    subCategory,
    price,
    availableQuantity,
  } = toy;
  return (
    <tbody>
      <tr>
        <td>{productName}</td>
        <td>{sellerName}</td>
        <td>{subCategory}</td>
        <td>{price}</td>
        <td>{availableQuantity}</td>
        <td>
          <Link to="/toyInfo/_id">
            <button>View Details</button>
          </Link>
        </td>
      </tr>
    </tbody>
  );
};

export default TableData;
