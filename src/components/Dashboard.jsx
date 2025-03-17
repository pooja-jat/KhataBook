import React from "react";

const Dashboard = ({ transactions }) => {
  console.log("transactions", transactions);
  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((p, c) => p + c.amount, 0);

  const expence = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((p, c) => p + c.amount, 0);

  const balance = transactions.reduce((p, c) => p + c.amount, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
      <div className="bg-green-500 p-5  rounded-lg text-white rounded-md">
        <h2 className="text-lg font-semibold">Total Income:</h2>
        <h2 className="text-3xl font-bold">{income}</h2>
      </div>
      <div className="bg-red-500 p-5 rounded-lg text-white rounded-md">
        <h2 className="text-lg font-semibold">Total Expense:</h2>
        <h2 className="text-3xl font-bold">{expence}</h2>
      </div>
      <div className="bg-blue-500  p-5  rounded-lg text-white rounded-md">
        <h2 className="text-lg font-semibold">Total Balance:</h2>
        <h2 className="text-3xl font-bold">{balance}</h2>
      </div>
    </div>
  );
};

export default Dashboard;
