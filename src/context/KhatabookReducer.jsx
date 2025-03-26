export const KhatabookReducer = (state, action) => {
  if (action.type === "REMOVE_TRANSACTION") {
    return {
      ...state,
      transactions: state.transactions.filter(
        (item) => item.id !== action.payload
      ),
    };
  } else if (action.type === "SAVE_TRANSACTION") {
    return {
      ...state,
      transactions: [...state.transactions, action.payload],
    };
  } else if (action.type === "EDIT_TRANSACTION") {
    return {
      ...state,
      edit: { transaction: action.payload, isEdit: true },
    };
  } else if (action.type === "UPDATE_TRANSACTION") {
    return {
      ...state,
      transactions: state.transactions.map((item) =>
        item.id === action.payload.id ? action.payload : item
      ),
      edit: { transaction: {}, isEdit: false },
    };
  }
};
