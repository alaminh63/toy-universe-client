import React from "react";

const TableData = ({ toy }) => {
  const { productName, sellerName, subCategory, price, availableQuantity } =
    toy;
  return (
    <tbody>
      <tr>
        <td>{productName}</td>
        <td>{sellerName}</td>
        <td>{subCategory}</td>
        <td>{price}</td>
        <td>{availableQuantity}</td>
        <td>
          <button>View Details</button>
        </td>
      </tr>
    </tbody>
  );
};

export default TableData;
