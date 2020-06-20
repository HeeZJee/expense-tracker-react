import React, { useContext } from 'react'
import './ListTransaction.css'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { ContextTransactions } from '../../store/context'


const ListTransaction = () => {
    const { transactions } = useContext(ContextTransactions)
    return (
        < div className="list" >
            <h3>History</h3>
            <ul id="list" className="list">
                <li className="minus">
                    Cash <span>-$400</span><button className="delete-btn"><DeleteOutlinedIcon /></button>
                </li>

                {transactions.map(transaction => (
                    <li className="minus" key={transaction.id}>
                        {transaction.desc}
                        <span>${Math.abs(transaction.amount)}</span>
                        <button className="delete-btn"><DeleteOutlinedIcon /></button>
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default ListTransaction
