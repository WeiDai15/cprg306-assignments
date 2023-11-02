import React, { useState } from 'react';

function NewItem = ({ onAddItem}) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = { name, quantity, category };

    onAddItem(newItem);
    setName('');
    setQuantity('1');
    setCategory('produce');
  };

  return (
    <div className="max-w-screen-sm mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Add New Item</h1>
      <form onSubmit={handleSubmit}>
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            className="mt-1 p-2 border rounded-md w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
          <input
            type="number"
            id="quantity"
            className="mt-1 p-2 border rounded-md w-full"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="1"
            max="99"
            required
          />
        </div>

        
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
          <select
            id="category"
            className="mt-1 p-2 border rounded-md w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
        </div>

        
        <div className="mb-4">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewItem;
