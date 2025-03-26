import React from "react";
import ListItem from "./ListItem";
import { useContext } from "react";
import KhatabookContext from "../context/KhatabookContext";

const ListGroup = () => {
  const { transactions } = useContext(KhatabookContext);
  return (
    <ul className="my-4 p-4">
      {transactions.map((transaction) => (
        <ListItem key={transaction.id} transaction={transaction} />
      ))}
    </ul>
  );
};

export default ListGroup;
