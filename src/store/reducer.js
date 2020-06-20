export const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_TRANSACTION":
            const updatedState = {
                ...state,
                transactions: state.transactions.filter((transaction) => (transaction.id !== action.payload))
            }
            return updatedState;
        case 'ADD_TRANSACTION':
            const updatedIncome = {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
            return updatedIncome;
        default:
            return state;
    }
}