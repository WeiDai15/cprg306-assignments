import React, { useState } from 'react';
import NewItem from './new-item'; 
import ItemList from './item-list'; 
import MealIdeas from "./meal-ideas";

import { getItems, addItem } from "./_services/shopping-list-service";
import { useEffect } from "react";

const Page = () => {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = async (newItem) => {
  try {
    const newItemId = await addItem(user.uid, newItem);
    setItems((prevItems) => [...prevItems, { id: newItemId, ...newItem }]);
  } catch (error) {
    console.error("Error adding item:", error);
  }
};

  
  const loadItems = async () => {
  try {
    const fetchedItems = await getItems(user.uid);
    setItems(fetchedItems);
  } catch (error) {
    console.error("Error fetching items:", error);
  }
};
  
  useEffect(() => {
  if (user && user.uid) {
    loadItems();
    }
  }, [user?.uid]);

  return (
    <main className="max-w-screen-sm mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Shopping List</h1>

      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
      
    </main>
  );
};

export default Page;
