import React, { useContext, useEffect, useState } from "react";
import KhatabookContext from "../context/KhatabookContext";

const Form = () => {
  const { dispatch, edit } = useContext(KhatabookContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    !edit.isEdit
      ? // Save Transation

        dispatch({
          type: "SAVE_TRANSACTION",

          payload: { id: crypto.randomUUID(), text, amount: +amount },
        })
      : //  Update Transaction
        dispatch({
          type: "UPDATE_TRANSACTION",
          payload: { id: edit.transaction.id, text, amount: +amount },
        });

    setText("");
    setAmount("");
  };

  useEffect(() => {
    if (edit.isEdit) {
      setAmount(edit.transaction.amount);
      setText(edit.transaction.text);
    }
  }, [edit]);

  return (
    <div className="border border-gray-300 p-4 rounded-md">
      <h1 className="text-center text-xl font-semibold">
        Enter Your Transaction
      </h1>
      <form onSubmit={(e) => handleSubmit(e)} className="my-4">
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="w-full border border-indigo-500 p-1 my-1 rounded-sm"
          placeholder="Enter Amount"
        />
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          className="w-full border border-indigo-500 p-1 my-1 rounded-sm"
          placeholder="Enter Transaction"
        />
        <button className=" bg-indigo-700  py-2 w-full rounded-md my-2 font-semibold cursor-pointer hover:bg-indigo-500 text-white duration-150 ">
          {edit ? "Update" : "Submit"} Transaction
        </button>
      </form>
    </div>
  );
};

export default Form;
