import { describe, it, expect } from 'vitest';
import { generateShoppingList } from '../generateShoppingList';
import { Recipe } from '../../types';

const recipes: Recipe[] = [
  {
    id: 1,
    name: 'Pancakes',
    ingredients: [
      { name: 'Flour', quantity: 200 },
      { name: 'Milk', quantity: 100 },
      { name: 'Eggs', quantity: 2 },
    ],
  },
  {
    id: 2,
    name: 'Omelette',
    ingredients: [
      { name: 'Eggs', quantity: 3 },
      { name: 'Milk', quantity: 50 },
    ],
  },
];

describe('generateShoppingList', () => {
  it('should calculate the correct total quantities of ingredients', () => {
    const result = generateShoppingList(recipes);
    expect(result).toEqual({
      Flour: 200,
      Milk: 150, // 100 (Pancakes) + 50 (Omelette)
      Eggs: 5,   // 2 (Pancakes) + 3 (Omelette)
    });
  });

  it('should return an empty object if no recipes are provided', () => {
    const result = generateShoppingList([]);
    expect(result).toEqual({});
  });

  it('should handle recipes with duplicate ingredient names', () => {
    const additionalRecipe: Recipe = {
      id: 3,
      name: 'More Pancakes',
      ingredients: [{ name: 'Flour', quantity: 100 }],
    };
    const result = generateShoppingList([...recipes, additionalRecipe]);
    expect(result).toEqual({
      Flour: 300, // 200 (Pancakes) + 100 (More Pancakes)
      Milk: 150,
      Eggs: 5,
    });
  });
});
