import React from "react";

const Card = () => {
  return (
    <div className="grid grid-cols-3 gap-4  mt-8 w-full rounded-lg  px-20">
      <div className="bg-green-500 p-5  rounded-lg text-center  text-white ">
        <h2 className="text-lg font-semibold">Total Income</h2>
        <p className="text-2xl font-bold"> ₹0</p>
      </div>
      <div className="bg-red-500 p-5 rounded-lg text-center  text-white">
        <h2 className="text-lg font-semibold">Total Expense</h2>
        <p className="text-2xl font-bold"> ₹0</p>
      </div>
      <div className="bg-yellow-500  p-5  rounded-lg text-center  text-white">
        <h2 className="text-lg font-semibold">Total Balance</h2>
        <p className="text-2xl font-bold"> ₹0</p>
      </div>
    </div>
  );
};

export default Card;
