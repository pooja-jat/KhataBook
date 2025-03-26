import { createContext, useReducer, useState } from "react";
import { KhatabookReducer } from "./KhatabookReducer";

const KhatabookContext = createContext();

export const KhatabookProvider = ({ children }) => {
  const initialState = {
    transactions: [{ id: 1, text: "I Am From Reducer", amount: 100000 }],
    edit: { transaction: {}, isEdit: false },
  };

  const [state, dispatch] = useReducer(KhatabookReducer, initialState);

  return (
    <KhatabookContext.Provider
      value={{
        transactions: state.transactions,
        edit: state.edit,
        dispatch,
      }}
    >
      {children}
    </KhatabookContext.Provider>
  );
};

export default KhatabookContext;
