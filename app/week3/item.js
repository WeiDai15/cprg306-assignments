import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="border border-gray-300 p-2 mb-2 rounded-md">
      <div>
        <strong>Name:</strong> {name}
      </div>
      <div>
        <strong>Quantity:</strong> {quantity}
      </div>
      <div>
        <strong>Category:</strong> {category}
      </div>
    </li>
  );
};

export default Item;
