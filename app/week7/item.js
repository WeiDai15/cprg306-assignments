import React from 'react';
 

const Item = ({ name, quantity, category }) => {
  return (
     
    <div className="shadow-xl p-6 mb-6 bg-blue-500 rounded-md  text-white"> 
    <li onClick={onSelect}>
      {name} - {quantity} {category}
    </li>
    </div>
  );
};

 

export default Item;