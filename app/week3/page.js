import React from 'react';
import ItemList from './item-list'; 

const Page = () => {
  return (
    <main className="max-w-screen-sm mx-auto p-4">
      
      <h1 className="text-3xl font-semibold mb-4">Shopping List</h1>

      <ItemList />
    </main>
  );
};

export default Page;
