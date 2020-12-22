import { iState } from "./state";

const ADD_TRANSACTION = "ADD_TRANSACTION";
const DELETE_TRANSACTION = "DELETE_TRANSACTION";

type Actions = { type: string; payload: number };

export const reducer = (state: iState, action: Actions) => {
  switch (action.type) {
    case DELETE_TRANSACTION:
      const updatedState = {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
      return updatedState;
    case ADD_TRANSACTION:
      const updatedIncome = {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
      return updatedIncome;
    default:
      return state;
  }
};
