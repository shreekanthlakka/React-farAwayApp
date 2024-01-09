/*eslint-disable react/prop-types*/

function Stats({ items }) {
    if (!items.length)
        return (
            <footer className="stats">
                {" "}
                You got nothing on packing list ! start adding some items to
                fly🛫
            </footer>
        );
    const packed = items.reduce((acc, item) => acc + (item.packed ? 1 : 0), 0);
    const percentage = Math.round((packed / items.length) * 100);
    return (
        <footer className="stats">
            <em>
                {percentage === 100
                    ? "You got everything! Ready to go✈️"
                    : `You have ${items.length} items on your list, and you already
                packed ${packed}(${percentage}%)`}
            </em>
        </footer>
    );
}

export default Stats;
