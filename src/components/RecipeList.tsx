import React from 'react';
import { Recipe } from '../types';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

interface RecipeListProps {
  recipes: Recipe[];
  onUpdateRecipe: (index: number) => void;
  onSelectRecipe: (recipe: Recipe) => void;
}

const RecipeList: React.FC<RecipeListProps> = ({
  recipes,onUpdateRecipe, onSelectRecipe }) => (
  <ul className="bg-white shadow-md rounded p-4 space-y-2">
    {recipes.map((recipe, index) => (
      <li
        key={index}
        className="flex justify-between items-center p-2 bg-gray-50 rounded hover:bg-gray-100"
      >

        {/* 名前部分をクリックで詳細表示 */}
        <span
          onClick={() => onSelectRecipe(recipe)}
          className="font-medium text-gray-700 cursor-pointer hover:underline"
        >
        {recipe.name}
        </span>

        {/* 更新ボタン */}
        <button
          onClick={() => onUpdateRecipe(index)}
          className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded"
        >
          <ArrowPathIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </li>
    ))}
  </ul>
);

export default RecipeList;