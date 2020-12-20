import React, { useContext } from "react";
import "./IncomeExpense.css";
import { ContextTransactions } from "../../store/context";

const IncomeExpense = () => {
  const { transactions } = useContext(ContextTransactions);
  const amounts = transactions.map((tranasaction) => tranasaction.amount);

  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, cur) => (acc += cur), 0);
  const expense = amounts
    .filter((amount) => amount < 0)
    .reduce((acc, cur) => (acc += cur), 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">PKR {income.toFixed(2)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">PKR {Math.abs(expense).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
