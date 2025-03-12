import React from "react";

const Form = () => {
  return (
    <div className="border border-gray-300 p-4 rounded-md">
      <h1 className="text-center text-xl font-semibold">
        Enter Your Transaction
      </h1>
      <form className="my-4">
        <input
          type="text"
          className="w-full border border-indigo-500 p-1 my-1 rounded-sm"
          placeholder="Enter Amount"
        />
        <input
          type="number"
          className="w-full border border-indigo-500 p-1 my-1 rounded-sm"
          placeholder="Enter Transaction"
        />
        <button className=" bg-green-400  py-2 w-full rounded-md my-2 font-semibold cursor-pointer hover:bg-green-700 duration-150 ">
          Submit Transaction
        </button>
      </form>
    </div>
  );
};

export default Form;
