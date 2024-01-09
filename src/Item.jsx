/*eslint-disable react/prop-types*/

function Item({ item, onDeleteItem, onToggleItem }) {
    return (
        <>
            <li>
                <input
                    type="checkbox"
                    value={item.packed}
                    onChange={() => onToggleItem(item.id)}
                />
                <span className={item.packed ? "packed" : ""}>
                    {item.quantity} : {item.description}
                </span>
                <button onClick={() => onDeleteItem(item.id)}>
                    <strong>❌</strong>
                </button>
            </li>
        </>
    );
}

export default Item;
