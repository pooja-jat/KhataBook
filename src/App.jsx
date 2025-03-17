import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import ListGroup from "./components/ListGroup";

const App = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      text: "Salary",
      amount: 150000,
    },
    {
      id: 2,
      text: "Rent",
      amount: -25000,
    },
    {
      id: 3,
      text: "Food",
      amount: -12000,
    },
    {
      id: 4,
      text: "Freelancing",
      amount: 10000,
    },
    {
      id: 5,
      text: "Fuel",
      amount: -8500,
    },
  ]);

  const [store, setStore] = useState();

  const removeTransaction = (id) => {
    setTransactions(transactions.filter((items) => items.id !== id));
  };

  const addTransaction = (obj) => {
    setTransactions([obj, ...transactions]);
  };

  const updateTransaction = (trs) => {
    setTransactions(
      transactions.map((tr) => {
        if (trs.id === tr.id) {
          return trs;
        } else {
          return tr;
        }
      })
    );
    setStore();
  };

  return (
    <>
      <Navbar />
      <div className="p-10 bg-gray-200 min-h-screen">
        <Form
          addTransaction={addTransaction}
          store={store}
          updateTransaction={updateTransaction}
        />
        <Dashboard transactions={transactions} />
        <ListGroup
          transactions={transactions}
          removeTransaction={removeTransaction}
          setStore={setStore}
          // setEdit={setEdit}
        />
      </div>
    </>
  );
};

export default App;
