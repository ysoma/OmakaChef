import { Recipe } from '../types';

/**
 * Generates a shopping list by aggregating ingredients from selected recipes.
 * @param recipes - Array of selected recipes.
 * @returns An object representing the shopping list with ingredient names as keys and quantities as values.
 */
export const generateShoppingList = (recipes: Recipe[]): { [key: string]: number } => {
  const shoppingList: { [key: string]: number } = {};
  recipes.forEach((recipe) =>
    recipe.ingredients.forEach((ingredient) => {
      shoppingList[ingredient.name] = (shoppingList[ingredient.name] || 0) + ingredient.quantity;
    })
  );
  return shoppingList;
};