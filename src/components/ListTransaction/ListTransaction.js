import React from 'react'
import './ListTransaction.css'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';


const ListTransaction = () => {
    return (
        <div className="list">
            <h3>History</h3>
            <ul id="list" className="list">
                <li className="minus">
                    Cash <span>-$400</span><button className="delete-btn"><DeleteOutlinedIcon /></button>
                </li>

                <li className="minus">
                    Cash <span>-$400</span><button className="delete-btn"><DeleteOutlinedIcon /></button>
                </li>
                <li className="minus">
                    Cash <span>-$400</span><button className="delete-btn"><DeleteOutlinedIcon /></button>
                </li>
                <li className="minus">
                    Cash <span>-$400</span><button className="delete-btn"><DeleteOutlinedIcon /></button>
                </li>
                <li className="minus">
                    Cash <span>-$400</span><button className="delete-btn"><DeleteOutlinedIcon /></button>
                </li>
            </ul>
        </div>
    )
}

export default ListTransaction
