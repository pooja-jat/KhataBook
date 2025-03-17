import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const ListItem = ({ transaction, removeTransaction, setStore }) => {
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
          onClick={() => {
            setStore(transaction);
          }}
          className="py-0.5 px-2  mx-1 cursor-pointer rounded-md"
        >
          <FaEdit className="text-yellow-600" />
        </button>
        <button
          onClick={() => removeTransaction(transaction.id)}
          className=" py-0.5 px-2  mx-1 cursor-pointer rounded-md"
        >
          <FaTrash className="text-red-500" />
        </button>
      </div>
    </li>
  );
};

export default ListItem;
