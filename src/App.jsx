import { useEffect, useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { useLocalStorage } from "./useLocalStorage";

function App() {
    // const initialItems = [
    //     { id: 1, description: "Passports", quantity: 2, packed: false },
    //     { id: 2, description: "Socks", quantity: 12, packed: false },
    // ];
    // const [items, setItems] = useState(initialItems);

    const [items, setItems] = useLocalStorage([], "faraway");

    function handleAddForm(item) {
        setItems((items) => [...items, item]);
    }

    function handleToggle(id) {
        setItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item
            )
        );
    }

    function handleDeletion(id) {
        setItems((items) => items.filter((item) => item.id !== id));
    }
    return (
        <div className="app">
            <Logo />
            <Form handleAddForm={handleAddForm} />
            <PackingList
                items={items}
                handleDeletion={handleDeletion}
                handleToggle={handleToggle}
            />
            <Stats />
        </div>
    );
}

export default App;
