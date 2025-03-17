import React, { useEffect, useState } from "react";

const Form = ({ addTransaction, updateTransaction, store }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (store) {
      updateTransaction({
        id: store.id,
        amount: parseInt(amount),
        text: text,
      });
    } else {
      addTransaction({
        id: crypto.randomUUID(),
        amount: parseInt(amount),
        text: text,
      });
    }

    setText("");
    setAmount("");
  };

  useEffect(() => {
    if (store) {
      setAmount(store.amount);
      setText(store.text);
    }
  }, [store]);

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
        <button className=" bg-green-400  py-2 w-full rounded-md my-2 font-semibold cursor-pointer hover:bg-green-700 duration-150 ">
          {store ? "Update" : "Submit"} Transaction
        </button>
      </form>
    </div>
  );
};

export default Form;
