import React, { createContext, useReducer } from 'react';
import { reducer } from './reducer'

const initialList = {
    transactions: []
}

export const ContextTransactions = createContext(initialList);


export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialList)

    const delTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        }
        )
    }


    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        }
        )
    }




    return (



        <ContextTransactions.Provider
            value={{
                transactions: state.transactions,
                delTransaction,
                addTransaction
            }}>
            {children}
        </ContextTransactions.Provider >
    )
}