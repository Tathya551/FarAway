import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Ball", quantity: 2, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);
  const handleItems = function (item) {
    setItems((items) => [...items, item]);
  };
  const handleDeleteItem = function (id) {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const handleToggle = function (id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  const clearList = function () {
    setItems([]);
  };
  return (
    <div>
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggle}
        onClearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}
