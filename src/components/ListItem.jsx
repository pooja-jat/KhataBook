import React, { useContext } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import KhatabookContext from "../context/KhatabookContext";

const ListItem = ({ transaction }) => {
  const { dispatch } = useContext(KhatabookContext);

  const handleRemove = (id) => {
    dispatch({
      type: "REMOVE_TRANSACTION",
      payload: id,
    });
  };

  const handleEdit = (transaction) => {
    dispatch({
      type: "EDIT_TRANSACTION",
      payload: transaction,
    });
  };

  // console.log(handleEdit);
  return (
    <li
      className={
        transaction.amount > 0
          ? "relative my-1 border border-gray-300 rounded-md p-4 bg-green-100"
          : "relative my-1 border border-gray-300 rounded-md p-4 bg-red-100"
      }
    >
      <h1 className="text-3xl my-2 font-semibold">{transaction.amount}</h1>
      <p className="text-sm font-semibold">{transaction.text}</p>
      <div className="absolute top-5 right-5">
        <button
          onClick={() => handleEdit(transaction)}
          className="py-0.5 px-2  mx-1 cursor-pointer rounded-md"
        >
          <FaEdit className="text-yellow-600" />
        </button>
        <button
          onClick={() => handleRemove(transaction.id)}
          className=" py-0.5 px-2  mx-1 cursor-pointer rounded-md"
        >
          <FaTrash className="text-red-500" />
        </button>
      </div>
    </li>
  );
};

export default ListItem;
