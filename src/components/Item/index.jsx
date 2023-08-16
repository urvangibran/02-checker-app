import React from 'react'

function Item({ item, removeItem, checkedBox }) {
    const {id, description, quantity, packed} = item
    return (
        <li>
            <input type="checkbox" value={packed} onChange={() => checkedBox(id)} />
            <span className={`${packed ? 'packed' : ''}`}> 
            {quantity} - {description}
            </span> 
            <button onClick={() => removeItem(id)}>❌</button>
        </li>   
    )
}

export default Item