import React from 'react';
import './AddTransaction.css';


const AddTransaction = () => {
    return (
        <div className={'component'} >
            <form>

                <h3>Add new transaction</h3>

                <div>
                    <label htmlFor='description'>Description</label>
                    <br />
                    <input type='text' id='description'></input>
                </div>

                <div>
                    <label htmlFor='amount'>Amount</label>
                    <br />
                    <input id='amount' type='number'></input>
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