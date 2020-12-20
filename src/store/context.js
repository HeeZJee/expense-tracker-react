import React, { createContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

const TRANSACTIONS = "TRANSACTIONS";
const initialState = {
  transactions: [],
};

export const ContextTransactions = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    const getTrans = JSON.parse(localStorage.getItem(TRANSACTIONS));
    return getTrans?.transactions
      ? { transactions: JSON.parse(getTrans.transactions) }
      : { transactions: [] };
  });

  const delTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  useEffect(
    () =>
      localStorage.setItem(
        TRANSACTIONS,
        JSON.stringify({
          transactions: JSON.stringify(state.transactions),
        })
      ),
    [state]
  );

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <ContextTransactions.Provider
      value={{
        transactions: state.transactions,
        delTransaction,
        addTransaction,
      }}
    >
      {children}
    </ContextTransactions.Provider>
  );
};
