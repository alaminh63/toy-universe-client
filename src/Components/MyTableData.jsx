import React from "react";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin7Fill } from "react-icons/ri";

const MyTableData = ({ toys, deleteToy }) => {
  const {
    _id,
    productName,
    sellerName,
    subCategory,
    price,
    availableQuantity,
  } = toys;

  return (
    <tr className="text-center border-2">
      <td>{sellerName}</td>
      <td>{productName}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{availableQuantity}</td>
      <td className="flex gap-4 text-lg justify-center">
        <Link
          to={`/modifyItems/${_id}`}
          className="border-2 rounded p-2 cursor-pointer"
        >
          <FiEdit />
        </Link>
        <span
          onClick={() => deleteToy(_id)}
          className="bg-red-500 p-2 text-white rounded cursor-pointer"
        >
          <RiDeleteBin7Fill />
        </span>
      </td>
    </tr>
  );
};

export default MyTableData;
