/*eslint-disable react/prop-types*/

import { useState } from "react";

function Form({ handleAddForm }) {
    const [quantity, setQuantity] = useState(1);
    const [search, setSearch] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (!search) return;
        const newItem = {
            id: Math.floor(Math.random() * 99999) + 1,
            quantity,
            description: search,
            createdAt: Date.now(),
            packed: false,
        };
        handleAddForm(newItem);
        setQuantity(1);
        setSearch("");
    }
    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip</h3>
            <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
            >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option value={num} key={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="Items..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            ></input>
            <button>Add</button>
        </form>
    );
}

export default Form;
