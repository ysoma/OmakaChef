import React from 'react';
import RecipeList from './RecipeList';
import ShoppingList from './ShoppingList';
import { Recipe } from '../types';
import { generateShoppingList } from '../utils';

interface RenderMenuAndShoppingListProps {
  selectedRecipes: Recipe[];
  onUpdateRecipe: (index: number) => void;
  onSelectRecipe: (recipe: Recipe) => void;
}

const RenderMenuAndShoppingList: React.FC<RenderMenuAndShoppingListProps> = ({
  selectedRecipes,
  onUpdateRecipe,
  onSelectRecipe,
}) => {
  return (
    <div className="w-full max-w-2xl space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mt-6">Your Weekly Menu</h2>
      <RecipeList
        recipes={selectedRecipes}
        onUpdateRecipe={onUpdateRecipe}
        onSelectRecipe={onSelectRecipe}
        />
      <h2 className="text-2xl font-bold text-gray-800 mt-6">Shopping List</h2>
      <ShoppingList items={generateShoppingList(selectedRecipes)} />
    </div>
  );
};

export default RenderMenuAndShoppingList;
