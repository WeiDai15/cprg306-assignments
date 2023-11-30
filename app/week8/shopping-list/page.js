import React, { useState } from 'react';
import NewItem from './new-item'; 
import ItemList from './item-list'; 
import { getItems, addItem } from "./_services/shopping-list-service";
import { useEffect } from "react";

const Page = () => {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="max-w-screen-sm mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Shopping List</h1>

      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
      
    </main>
  );
};

export default Page;
