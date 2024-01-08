/*eslint-disable react/prop-types*/

import Item from "./Item";

function PackingList({ items, handleDeletion, handleToggle }) {
    return (
        <div className="list">
            <ul>
                {items.map((item) => (
                    <Item
                        key={item.id}
                        item={item}
                        handleDeletion={handleDeletion}
                        handleToggle={handleToggle}
                    />
                ))}
            </ul>
        </div>
    );
}

export default PackingList;
