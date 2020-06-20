import React, { useState, useContext } from 'react';
import './AddTransaction.css';
import { ContextTransactions } from '../../store/context'



const AddTransaction = () => {
    const [desc, setDesc] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(ContextTransactions)



    const submitIncome = (e) => {
        e.preventDefault();

        const newTransactions = {
            id: (Math.floor(Math.random() * 10000000000)),
            desc,
            amount: Math.abs(+amount)
        }

        addTransaction(newTransactions)
    }


    const submitExpense = (e) => {
        e.preventDefault();


        const newTransactions = {
            id: (Math.floor(Math.random() * 10000000000)),
            desc,
            amount: -Math.abs(+amount),
        }


        const c = desc === ' ' ? alert('HI') : desc;



        addTransaction(newTransactions)
    }


    return (
        <div class='form'>

            <h3>Add new transaction</h3>

            <div className='desc'>
                <label htmlFor='description'>Description</label>
                <br />
                <input type='text' id='description' value={desc} onChange={(e) => setDesc(e.target.value)}  ></input>
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