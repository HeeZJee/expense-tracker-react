import React, { useState } from 'react';
import './AddTransaction.css';


const AddTransaction = () => {
    const [desc, setDesc] = useState('');
    const [amount, setAmount] = useState('');

    return (
        <div className={'component'} >
            <form>

                <h3>Add new transaction</h3>

                <div className='desc'>
                    <label htmlFor='description'>Description</label>
                    <br />
                    <input type='text' id='description' value={desc} onChange={(e) => setDesc(e.target.value)}></input>
                </div>
                <div className='amount'>
                    <label htmlFor='amount'>Amount</label>
                    <br />
                    <input type='number' id='amount' value={amount} onChange={(e) => setAmount(e.target.value)}></input>
                </div>

                <div>
                    <button className='.btn btn-pri'>Add Income</button>
                    <button className='btn btn-sec'>Add Expense</button>
                </div>

            </form>
        </div >
    )
}

export default AddTransaction;