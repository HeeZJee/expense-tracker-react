import React, { useContext } from "react";
import { ContextTransactions } from "../store/context";

const Balance = () => {
  const { transactions } = useContext(ContextTransactions);

  const amounts = transactions.map((tranasaction) => tranasaction.amount);
  const total = amounts.reduce((acc, cur) => (acc += cur), 0);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${total.toFixed(2)}</h1>
    </div>
  );
};

export default Balance;
