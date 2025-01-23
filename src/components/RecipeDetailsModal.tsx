import React from 'react';
import { Recipe } from '../types';

interface RecipeDetailsModalProps {
  recipe: Recipe;
  onClose: () => void;
}

const RecipeDetailsModal: React.FC<RecipeDetailsModalProps> = ({ recipe, onClose }) => (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
    <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">{recipe.name}</h2>
      <h3 className="text-lg font-semibold">Ingredients:</h3>
      <ul className="mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="text-gray-700">
            {ingredient.name}: {ingredient.quantity}
          </li>
        ))}
      </ul>
      <button
        onClick={onClose}
        className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
      >
        Close
      </button>
    </div>
  </div>
);

export default RecipeDetailsModal;
