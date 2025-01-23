import React from 'react';

interface ShoppingListProps {
  items: { [key: string]: number };
}

const ShoppingList: React.FC<ShoppingListProps> = ({ items }) => (
  <ul className="bg-white shadow-md rounded p-4 space-y-2">
    {Object.entries(items).map(([name, quantity]) => (
      <li
        key={name}
        className="flex justify-between items-center p-2 bg-gray-50 rounded hover:bg-gray-100"
      >
        <span className="font-medium text-gray-700">{name}</span>
        <span className="text-gray-500">x{quantity}</span>
      </li>
    ))}
  </ul>
);

export default ShoppingList;