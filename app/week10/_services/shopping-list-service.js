import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Function to retrieve all items for a specific user
export async function getItems(userId) {
  const items = [];
  const itemsRef = collection(db, `users/${userId}/items`);
  const itemsSnapshot = await getDocs(itemsRef);

  itemsSnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });

  return items;
}

// Function to add a new item to a specific user's list of items
export async function addItem(userId, item) {
  const itemsRef = collection(db, `users/${userId}/items`);
  const newItemRef = await addDoc(itemsRef, item);
  return newItemRef.id;
}
