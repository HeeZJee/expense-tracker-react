import React from 'react'
import './ListTransaction.css'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';


const ListTransaction = () => {
    return (
        <div className="list">
            <h3>History</h3>
            <ul id="list" class="list">
                <li class="minus">
                    Cash <span>-$400</span><button class="delete-btn"><DeleteOutlinedIcon /></button>
                </li>

                <li class="minus">
                    Cash <span>-$400</span><button class="delete-btn"><DeleteOutlinedIcon /></button>
                </li>
                <li class="minus">
                    Cash <span>-$400</span><button class="delete-btn"><DeleteOutlinedIcon /></button>
                </li>
                <li class="minus">
                    Cash <span>-$400</span><button class="delete-btn"><DeleteOutlinedIcon /></button>
                </li>
                <li class="minus">
                    Cash <span>-$400</span><button class="delete-btn"><DeleteOutlinedIcon /></button>
                </li>
            </ul>
        </div>
    )
}

export default ListTransaction
