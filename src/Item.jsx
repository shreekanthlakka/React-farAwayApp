/*eslint-disable react/prop-types*/

function Item({ item, handleDeletion, handleToggle }) {
    return (
        <>
            <li>
                <input
                    type="checkbox"
                    value={item.packed}
                    onChange={() => handleToggle(item.id)}
                />
                <span className={item.packed ? "packed" : ""}>
                    {item.quantity} : {item.description}
                </span>
                <button onClick={() => handleDeletion(item.id)}>
                    <strong>❌</strong>
                </button>
            </li>
        </>
    );
}

export default Item;
