import React, { useState } from 'react'

function AddForm({ onAddItem }) {
    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState(1)

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(e);

        if(!description) return;

        const newItem = { description, quantity, buy: false, id: Date.now() }
        console.log(newItem);
        onAddItem(newItem)

        setDescription("")
        setQuantity(1)
    }

    return (
        <form className='add-form' onSubmit={handleSubmit}>
            <h3>What items do you want to prepare today? 😄</h3>
            <select
                name="num"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            >
                {Array.from({ length: 20 }, (_, idx) => idx + 1).map((i) => (
                    <option key={i} > {i} </option>
                ))}
            </select>
            <input type="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <button>Add</button>
        </form>
    )
}

export default AddForm