import React from "react";
import ListItem from "./ListItem";

const ListGroup = ({ transactions, removeTransaction, setStore }) => {
  return (
    <ul className="my-4 p-4">
      {transactions.map((transaction) => (
        <ListItem
          key={transaction.id}
          transaction={transaction}
          removeTransaction={removeTransaction}
          setStore={setStore}
        />
      ))}
    </ul>
  );
};

export default ListGroup;
