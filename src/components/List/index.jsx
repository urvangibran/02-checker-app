import React, { useState } from 'react'
import Item from '../Item';

function List( {items, setItems, removeAllItem} ) {
    const [sortBy, setSortBy] = useState("input")

    let sortedItems;

    if(sortBy === "input") sortedItems = items
    if(sortBy === "alphabet") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description))
    if(sortBy === "quantity") sortedItems = items.slice().sort((a, b) => a.quantity - b.quantity) 
    if(sortBy === "buy") sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed)) 

    function removeItem(id) {
        console.log(id)
        const newItem = items.filter((item) => item.id !== id)
        setItems(newItem)
    }   

    function checkedBox(id) {
        console.log(id) 
        setItems(items => items.map((item) => item.id === id ? {
            ...item,
            packed: !item.packed
        } : item))
    }

    return (
        <div className='list'>
            <ul>
                {sortedItems.map((item) => (
                    <Item key={item.id} removeItem={removeItem} checkedBox={checkedBox} item={item} />
                ))}
            </ul>

            <div className='actions'>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">sort by first input list</option>
                    <option value="alphabet">sort by alphabet</option>
                    <option value="quantity">sort by quantity</option>
                    <option value="buy">sort by buy</option>
                </select>
                    <button onClick={() => removeAllItem()}>Clear List</button>

            </div>
        </div>
    )
}

export default List