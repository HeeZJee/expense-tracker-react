import React, { useContext } from "react";
import "./ListTransaction.css";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import { ContextTransactions } from "../../store/context";

const ListTransaction = () => {
  const { transactions, delTransaction } = useContext(ContextTransactions);

  return (
    <div className="list">
      <h3>History</h3>
      <ul>
        {transactions.map((transaction) => (
          <li
            className={transaction.amount >= 0 ? `plus` : `minus`}
            key={transaction.id}
          >
            {transaction.desc}
            <span>
              {transaction.amount >= 0 ? `+` : `-`}$
              {Math.abs(transaction.amount)}
            </span>
            <button
              className="delete-btn"
              onClick={() => delTransaction(transaction.id)}
            >
              <DeleteOutlinedIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTransaction;
