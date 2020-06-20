import React, { createContext, useReducer } from 'react';
import { reducer } from './reducer'

const initialList = {
    transactions: [
        { id: 1, desc: 'Phone', amount: -250 },
        { id: 2, desc: 'Salary', amount: 500 },
        { id: 3, desc: 'Rent', amount: -300 },
        { id: 4, desc: 'Product Sales', amount: 400 },
    ]
}

export const ContextTransactions = createContext(initialList);


export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialList)

    return (
        <ContextTransactions.Provider value={{ transactions: state.transactions }}>
            {children}
        </ContextTransactions.Provider >
    )
}