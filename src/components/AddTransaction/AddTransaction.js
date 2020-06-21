import React, { useState, useContext } from 'react';
import './AddTransaction.css';
import { ContextTransactions } from '../../store/context'





const AddTransaction = () => {
    const [desc, setDesc] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(ContextTransactions)


    const submitIncome = (e) => {
        e.preventDefault();

        if (desc.trim() === '') {
            alert('Description cannot be empty!')
            return false;
        }


        const newTransactions = {
            id: (Math.floor(Math.random() * 10000000000)),
            desc,
            amount: Math.abs(amount)
        }

        addTransaction(newTransactions)
        setAmount(0)
        setDesc('')
    }


    const submitExpense = (e) => {
        e.preventDefault();


        const newTransactions = {
            id: (Math.floor(Math.random() * 10000000000)),
            desc,
            amount: -Math.abs(amount),
        }


        if (desc.trim() === '') {
            alert('Invalid Input')
            return false;
        }

        addTransaction(newTransactions)

        setAmount(0)
        setDesc('')
    }


    return (
        <div className='form'>

            <h3>Add new transaction</h3>

            <div className='desc'>
                <label htmlFor='description'>Description</label>
                <br />
                <input type='text' id='description' placeholder='Enter Your Description' value={desc} onChange={(e) => setDesc(e.target.value)}  ></input>
            </div>
            <div className='amount'>
                <label htmlFor='amount'>Amount</label>
                <br />
                <input type='number' id='amount' value={amount} onChange={(e) => setAmount(e.target.value)}></input>
            </div>

            <div>
                <button className='.btn btn-pri' onClick={submitIncome}>Add Income</button>
                <button className='btn btn-sec' onClick={submitExpense}>Add Expense</button>
            </div>
        </div >
    )
}

export default AddTransaction;